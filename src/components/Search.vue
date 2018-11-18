<template>
  <transition name="fade">
    <div class="grid-container">
    <div :class="{'spinner': loading}"></div>
      <div class="grid-x">
        <div class="search-mechanism cell small-3">
            <form v-on:submit.prevent="searchVaccines">
              <h4> Qual vacina procura? </h4>
              <label for="search">
                <select name="vaccines" v-model="search.vaccine_id">
                  <option v-for="vaccine of vaccines"
                          v-bind:key="vaccine.id"
                          v-bind:value="vaccine.id">
                          {{ vaccine.name }}
                    </option>
                </select>
              </label>
              <div>
                Para quem é essa vacina?
                <label><input type="radio" name="nameVacine" v-model="search.category" value="Human" checked> Humano</label>
                <label><input type="radio" name="nameVacine" v-model="search.category" value="Animal" disabled> Animal (Bloqueada) </label>
              </div>
              <button class="button" > Procurar</button>
            </form>
        </div>
        <div class="list cell auto">
         <h3 ref="listTitle"> Esperando pesquisa </h3>
          <div class="map" v-if="map">
            <buttton class="button" v-on:click="closeMap()"> <i class="fa fa-arrow-left"></i> Voltar </buttton>
            <map-box :lat="lat" :long="long"></map-box>
          </div>
          <div class="waiting" v-else-if="centers.length == 0">
            <h5 ref="listBody"> Preencha primeiro os campos </h5>
          </div>
          <table v-else>
           <thead>
             <tr>
               <th> Nome </th>
               <th> Localidade </th>
               <th> Ação </th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="(center, index) in centers" v-bind:key="index">
               <td> {{ center.name }} </td>
               <td> {{ center.state_id }} </td>
               <td> <button class="button" v-on:click="openMap(center.latitude, center.longitude)"> Ver no mapa </button> </td>
             </tr>
           </tbody>
           <tfoot>
             <tr>
               <td colspan="3"> Paginação </td>
             </tr>
           </tfoot>
          </table>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.search-mechanism {
  border-top: 6px solid #639fab;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #fff;
  padding: 25px;
  max-height: 312px;
  box-shadow: 1px 0px 9px #dedede;
  text-align: center;

  form {
    h4 {
      font-family: "KoHo";
    }
    div {
      display: block;
      label {
        text-align: left;
      }
    }
    button {
      background-color: #1c5d99;
      padding: 5px 20px;
      color: #fff;
      cursor: pointer;
      border-radius: 12px;
      &:hover {
        background-color: #0f3b64;
      }
    }
  }
}
.list {
  margin-left: 12px;
  height: 500px;
  text-align: center;
  background-color: #fff;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 15px;
  box-shadow: 1px 0px 9px #dedede;
  border-bottom: 6px solid #639fab;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  h3 {
    font-family: "KoHo";
  }

  .waiting {
    box-sizing: border-box;
    height: 100%;
    padding-top: 23%;

    h5 {
      font-family: "KoHo";
      color: #639fab;
    }
  }

  table {
    thead {
      tr {
        th {
          text-align: center;
        }
      }
    }
    tbody {
      tr {
        td {
          .button {
            margin-bottom: 0;
            background-color: transparent;
            color: #0f3b64;
            cursor: pointer;
          }
        }
      }
    }
    tfoot {
      tr {
        td {
          text-align: center;
        }
      }
    }
  }
}
.map {
  box-sizing: border-box;
  height: 78%;
  text-align: left;

  .button {
    margin-bottom: 0;
    background-color: transparent;
    color: #0f3b64;
    cursor: pointer;
  }
}
</style>
<script>
import MapBox from '@/components/section/MapBox.vue'
import generateApi from '@/api.const'
export default {
  name: 'Search',
  components: {
    MapBox
  },
  data: function () {
    return {
      search: {
        vaccine_id: '',
        category: ''
      },
      centers: [],
      vaccines: [{ id: '', name: '' }],
      loading: false,
      lat: '2.5695',
      long: '-8.658',
      map: false
    }
  },
  mounted: function () {
    this.getAllVaccines()
  },
  methods: {
    searchVaccines: function () {
      this.loading = true
      const token = localStorage.getItem('vaccine-card-token')
      this.$http
        .get(
          generateApi(
            `centers/vaccines/${this.search.vaccine_id}/${
              this.search.category
            }?token=${token}`
          )
        )
        .then(({ data }) => {
          if (!(data.centers.length === 0)) {
            this.$refs.listTitle.innerHTML = 'Não consegui encontrar ;-('
            this.$refs.listBody.innerHTML = 'Lamentamos por ainda não termos centros para o ajudar, vamos adicionar mais centros o mais breve possível :-)'
          } else {
            this.$refs.listTitle.innerHTML = `Encontramos ${data.centers.length} para você`
              this.centers = [
                  { name: 'SSS', state_id: 'Op', longitude: '-5.265485', latitude: '9.25654876' }
              ]
          }
          this.loading = false
        })
        .catch(_ => {
          this.loading = false
        })
    },
    getAllVaccines: function () {
      this.loading = true
      const token = localStorage.getItem('vaccine-card-token')
      this.$http
        .get(generateApi(`vaccines?token=${token}`))
        .then(({ data }) => {
          if (!(data.vaccines.length === 0)) {
            this.vaccines = data.vaccines
          } else {
            this.vaccines = [{ name: 'Sem vacinas no momento ', id: 0 }]
          }

          this.loading = false
        })
        .catch(_ => {
          this.loading = false
        })
    },
    openMap: function (lat, long) {
      this.map = true
      this.lat = lat,
      this.long = long
    },
    closeMap: function () {
      this.map = false
    }
  }
}
</script>
