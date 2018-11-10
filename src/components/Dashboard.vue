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
                <tr v-for="item of userHistory" v-bind:key="item.id">
                  <td> {{ item.id }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.vacine }}</td>
                  <td>{{ item.center }}</td>
                  <td>{{ item.doctor }}</td>
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
          <div>
            <h3> Vacina dos animais </h3>
            <select class="" name="">
              <option value=""> Dog - Maia </option>

            </select>
            <table class="stack unstriped">
              <thead>
                <tr>
                  <td>Data</td>
                  <td>Nome</td>
                  <td>Centro</td>
                  <td>Doutor</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11-02-2009</td>
                  <td>Tastey</td>
                  <td>VVV</td>
                  <td>7.5/10</td>
                </tr>
                <tr>
                  <td>11-02-2009</td>
                  <td>Delicious</td>
                  <td>VVV</td>
                  <td>8/10</td>
                </tr>
                <tr>
                  <td>11-02-2009</td>
                  <td>Superb</td>
                  <td>VVV</td>
                  <td>11/10</td>
                </tr>
              </tbody>
            </table>
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
      cards: [
        { icon: 'fa-medkit', title: 'Vacinas', qtd: 0, background: '#C7CCDB' },
        { icon: 'fa-users', title: 'Membros', qtd: 0, background: '#AEC5EB' },
        { icon: 'fa-paw', title: 'Animais', qtd: 0, background: '#E9AFA3' }
      ]
    }
  },
  computed: {
    userHistory: function () {
      return this.$store.getters.getUserHistory
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
}
h3 {
  font-size: 28px;
  font-family: "KoHo";
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
