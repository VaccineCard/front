<template lang="html">
  <div class="row">
    <div class="grid-container">
      <div class="cards grid-x grid-padding-x ">
        <app-card v-for="(card, index) of cards"
          v-bind:key="index"
          v-bind:data="card"/>
      </div>
      <div class="content">

      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/section/Card.vue'
export default {
  name: 'Dashboard',
  components: {
    'app-card': Card
  },
  data: function () {
    return  {
      cards : [
        { icon: 'fa-medkit', title: 'Vacinas', qtd: 0, background: '#C7CCDB'},
        { icon: 'fa-users', title: 'Membros', qtd: 0, background: '#AEC5EB'},
        { icon: 'fa-medkit', title: 'Animais', qtd: 0, background: '#E9AFA3'}
      ]
    }
  }
}
</script>

<style lang="scss">
  .cards {
    display: flex;
    justify-content: space-evenly;
  }
</style>
