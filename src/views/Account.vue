<template>
  <div class="grid-container fluid">
    <div class="grid-x">
      <div class="cell small-2 slidebar">
        <div>
          <app-logo></app-logo>
          <app-profile></app-profile>
          <div class="alt">
            <button class="button">
               <i class="fa fa-plus" />
               Adicionar membro
            </button>
          </div>
          <app-menu></app-menu>
        </div>
      </div>
      <div class="cell auto cell-container">
        <div class="top-menu">
          <div class="grid-x">
            <div class="cell auto"></div>
            <div class="cell small-3">
              <p class="username"> Olá, Viccine user! </p>
              <div class="top-image"></div>
              <i class="fa fa-angle-down"></i>
            </div>
          </div>
        </div>
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/section/Logo.vue'
import Profile from '@/components/section/Profile.vue'
import Menu from '@/components/section/Menu.vue'

export default {
  name: 'Account',
  components: {
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
      padding: 0px 5px;

      .grid-x {
        .small-3{
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;

          p.username {
            margin: 0;
            color: #fffbf9;
            font-family: 'KoHo';
          }

          .top-image{
            background: #222222;
            height: 48px;
            width: 48px;
            border-radius: 50%;
          }
        }
      }
    }

    div.container {
      padding: 25px;
      box-sizing: border-box;
    }
  }

  .grid-x {
    height: 100%;

    div.slidebar {
      background: #222222;

      div.alt {
        text-align: center;
        font-family: 'KoHo';
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
