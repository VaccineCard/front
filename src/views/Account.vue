<template>
  <div class="grid-container fluid">
    <div class="grid-x">
      <div class="cell small-3 slidebar">
        <div>
          <app-logo></app-logo>
          <app-profile></app-profile>
          <div class="alt">
            <button class="button">
               <i class="fa fa-plus" />
               Adicionar membro na família
            </button>
          </div>
          <app-menu></app-menu>
        </div>
      </div>
      <div class="cell auto cell-container">
        <div class="top-menu">
          <div class="grid-x">
            <div class="cell auto"></div>
            <div class="cell small-4">
              <p> Olá, Viccine user! </p>
              <div class="top-image"></div>
            </div>
          </div>
        </div>
        <app-dashboard></app-dashboard>
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
import Logo from '@/components/section/Logo.vue'
import Profile from '@/components/section/Profile.vue'
import Menu from '@/components/section/Menu.vue'

export default {
  name: 'Account',
  components: {
    'app-dashboard': Dashboard,
    'app-logo': Logo,
    'app-profile': Profile,
    'app-menu': Menu
  }
}
</script>

<style lang="scss" scoped>
  div.fluid{
    height: 100%;
    padding: 0;
    margin: 0;
  }

  div.cell-container {
    background-color: #fffbf9;

    div.top-menu {
      height: 55px;
      background-color: #639fab;
      border-bottom: 1px solid #ddd;
      padding: 10px 5px;

      .grid-x {
        .small-4{
          display: flex;
          text-align: right;
        }
      }
    }
  }

  .top-image{
    background: #222222;
    height: 48px;
    width: 48px;
    border-radius: 50%;
  }

  .grid-x {
    height: 100%;

    div.slidebar {
      background: #222222;

      div.alt {
        text-align: center;
        button {
          border-radius: 6px;
          background-color: #1c5d99;

          &:hover {
            background: rgba($color: #0f3b64, $alpha: 1.0)
          }
        }
      }
    }
  }
</style>
