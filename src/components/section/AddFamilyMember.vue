<template>
  <transition name="slide-fade">
    <div class="family_form">
      <app-add-parent v-if="showParent"></app-add-parent>
      <form action="" v-else>
        <div class="step-1">
          <h4> Quem deseja adicionar </h4>
          <router-link v-bind:to="{ name: 'addChild' }" class="button">Criança</router-link>
          <button v-on:click="changeShowParentState()" class="button">Adulto</button>
        </div>
      </form>
    </div>
  </transition>
</template>
<style lang="scss" scoped >
  .family_form{
    position: absolute;
    width: 340px;
    height: 400px;
    background-color: #222;
    box-shadow: 1px 2px 9px #222;
    top: 20%;
    left: 0;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-right: 6px solid #639fab;

    form {
      color: #f0f0f0;
      text-align: center;
      box-sizing: border-box;
      padding: 15px;
      font-family: 'KoHo';

      .step-1 {
        h4 {
          font-family: 'KoHo';
        }
        padding-top: 45%;
      }
    }
  }
</style>
<script>
import AddParent from '../family/addParent'

export default {
  name: 'AddFamilyMember',
  components: {
    'app-add-parent': AddParent
  },
  data: function () {
    return {
      showParent: false
    }
  },
  methods: {
    changeShowParentState: function () {
      this.showParent = !this.showParent
    }
  }
}
</script>
