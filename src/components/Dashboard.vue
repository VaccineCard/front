<template lang="html">
  <transition name="fade">
    <div class="grid-container">
      <div class="row" >
        <div class="cards grid-x grid-padding-x ">
          <app-card v-for="(card, index) of cards"
            v-bind:key="index"
            v-bind:data="card"/>
        </div>
      </div>
      <div class="row">
        <div class="content">
          <div class="my-history">
            <h3> Minhas ultimas vacinas</h3>
            <table class="stack unstriped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Data</td>
                  <td>Vacina</td>
                  <td>Centro</td>
                  <td>Doutor</td>
                </tr>
              </thead>
              <tbody>
                <template v-if="user.vaccines.length != 0">
                  <tr v-for="item of user.vaccines" v-bind:key="item.id">
                      <td> {{ item.id }}</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.vacine }}</td>
                      <td>{{ item.center }}</td>
                      <td>{{ item.doctor }}</td>
                  </tr>
                </template>
                <tr v-else>
                    <td colspan="5"> Sem nenhuma vacina ...</td>
                </tr>
              </tbody>
              <tfoot >
                <tr>
                  <th colspan="4">Paginação</th>
                  <td>Imprimir: <i class="fa fa-print"></i></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="calendars">
            <h3> Mini calendário </h3>
              <p> Somente um exemplo de como ficará</p>
              <v-calendar :attributes='attrs'>
              </v-calendar>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Card from '@/components/section/Card.vue'
export default {
  name: 'Dashboard',
  components: {
    'app-card': Card
  },
  data: function () {
    return {
      attrs: [
        {
          key: 'today',
          dates: new Date(),
          highlight: {
            backgroundColor: '#ff8080'
            // Other properties are available too, like `height` & `borderRadius`
          },
          contentStyle: {
            color: '#fafafa'
          }
        }
      ]
    }
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser
    },
    cards: function () {
      return [
        {
          icon: 'fa-medkit',
          title: 'Vacinas',
          qtd: this.user.vaccines.length,
          background: '#C7CCDB'
        },
        {
          icon: 'fa-users',
          title: 'Membros',
          qtd: this.user.members.length,
          background: '#AEC5EB'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@mixin default($propriety) {
  display: flex;
  justify-content: $propriety;
}

.cards {
  @include default(space-evenly);
}

.content {
  @include default(space-around);
  padding-top: 25px;
  .my-history {
    width: 55%;
    color: #333;
  }
  div.calendars {
    position: relative;
  }
}
h3 {
  font-size: 28px;
  font-family: 'KoHo';
  text-align: left;
  border-bottom: 1px solid #eee;
}
table {
  max-height: 450px;
  margin-bottom: 0;

  thead {
    tr {
      td {
        text-align: center;
      }
    }
  }
  tbody {
    tr {
      td:nth-child(1) {
        font-weight: bolder;
      }
      td {
        text-align: center;
      }
    }
  }
  tfoot {
    tr {
      th {
        text-align: center;
      }
      td {
        text-align: right;
      }
    }
  }
}
</style>
