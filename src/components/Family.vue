<template>
  <transition name="fade">
    <div class="grid-container">
      <div class="grid-x">
        <div class="list-family-members cell small-3">
          <h4> Membros na família </h4>
          <ul class="members" v-if="!members.length == 0">
            <li v-for="member in members" v-bind:key="member.id">
              <a class="button" v-on:click="getUserInformation(member.id)"> {{ member.name }}</a>
            </li>
          </ul>
          <div v-else>
            <p> Sem nenhum familiar adicionado </p>
          </div>
        </div>
        <div class="info cell auto">
          <h3> Informações do familiar</h3>
          <div class="waiting" v-if="userInfo.length == 0">
            <h5 ref="listBody"> Escolha primeiro o familiar </h5>
          </div>
          <div class="information grid-x grid-margin-x" v-else>
            <div class="cell small-4 profile">
              <div class="photo">
                <span>Conteúdo bloqueado</span>
              </div>
              <div class="details">
               <label for=""> Nome: {{ userInfo.name }} </label> 
               <label for=""> Ultima vacina tomada: {{ userInfo.name }} </label> 
               <label for=""> Grau de parentesco: {{ userInfo.name }} </label> 
               <label for=""> Criou a conta há: {{ userInfo.name }} </label> 
              </div>
            </div>
            <div class="cell auto vaccines">
              <h5>Ultimas 5 vacinas</h5>
              <table>
                <thead>
                  <tr>
                    <td> Vacina </td>
                    <td> Doutor </td>
                    <td> Data </td>
                  </tr>
                </thead>
                <tbody>
                  <!-- template>
                    <tr>
                    <td> AAA</td>
                    <td> DDD </td>
                    <td> XXXX-XX-XX </td>
                  </tr>
                  </template -->
                  <tr>
                    <td colspan="3"> Sem nenhuma vacina </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
  .list-family-members {
    border-top: 6px solid #639fab;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #fff;
    padding: 25px;
    min-height: 312px;
    max-height: 450px;
    box-shadow: 1px 0px 9px #dedede;
    text-align: center;
    h4 {
      font-family: 'KoHo';
    }

    div {
      p {
        font-family: 'KoHo';
        margin-top: 50%;
        color: #639fab;
      }
    }
  }
  .info {
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
      font-family: 'KoHo';
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

    .information {
      .profile {
        .photo {
          height: 200px;
          width: 200px;
          border-radius: 50%;
          background-color: #639fab;
          text-align: center;
          padding-top: 40%;
          box-sizing: border-box;
          span {
            font-family: 'KoHo';
            color: #555;
            background-color: #ccc;
            border-radius: 12px;
            padding: 8px;
          }
        }

        .details {
          text-align: left;
          padding: 12px;

          label {
            font-family: 'KoHo';
            font-weight: bolder;
            font-size: 12pt;
          }
        }
      }

      .vaccines {
        padding-top: 12px;
        h5 {
          font-family: 'KoHo';
          text-align: center;
        }
        table {
          border-radius: 12px;
          thead {
            tr {
              td {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>
<script>
import generateApi from '@/api.const'

export default {
  name: 'Family',
  data: function () {
    return {
      userInfo: []
    }
  },
  computed: {
    members: function () {
      return this.$store.getters.getUser['members']
    }
  },
  methods: {
    getFamiliarInformation (id) {
      const token = localStorage.getItem('vaccine-card-token')
      this.$http.get(generateApi(`patients/${id}?token=${token}`)).then(({ data }) => {
        this.userInfo = data.user
      })
      .catch(({ response }) => {
        // eslint-ignore-next-line
        console.log( response )
      })
    }
  }
}
</script>
