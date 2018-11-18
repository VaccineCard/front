<template>
  <div class="grid-container fluid">
    <div class="grid-x">
      <div class="cell small-2 slidebar">
        <div>
          <app-logo></app-logo>
          <app-profile :name="user.name" :typeaccount="'Paciente'"></app-profile>
          <div class="alt">
            <button class="button" v-on:click="toogleAddMamber">
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
              <i class="fa fa-bell"></i>
              <p class="username"> Olá, {{ user.name }}! </p>
              <div class="top-image"></div>
              <button v-on:click="toogleTopMenu()" >
                <i class="fa fa-angle-down" :class="{'fa-angle-up': toogleMenu}"></i>
              </button>
            </div>
          </div>
          <div class="menu" v-if="toogleMenu">
            <ul>
              <li>
                <button class="button">Definições</button>
              </li>
              <li>
                <button v-on:click="logout()" class="button">Logout</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <router-view></router-view>
          <app-add-family-member v-if="showMemberPanel"></app-add-family-member>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/section/Logo.vue'
import Profile from '@/components/section/Profile.vue'
import Menu from '@/components/section/Menu.vue'
import AddFamilyMember from '@/components/section/AddFamilyMember.vue'

export default {
  name: 'Account',
  created: function () {
    document.title = 'Vaccine Card :. Minha conta'
    this.$store.commit('addUser', JSON.parse(localStorage.getItem('vaccine-card-user')))
    this.getMyFamilyMembers(this.user.id)
  },
  data: function () {
    return {
      toogleMenu: false,
      showMemberPanel: false
    }
  },
  components: {
    'app-logo': Logo,
    'app-profile': Profile,
    'app-menu': Menu,
    'app-add-family-member': AddFamilyMember
  },
  methods: {
    getMyFamilyMembers: function (id) {
      this.$store.dispatch('findUserFamilyMembers', id)
    },
    toogleTopMenu: function () {
      this.toogleMenu = !this.toogleMenu
    },
    logout: function () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'auth' })
    },
    toogleAddMamber () {
      this.showMemberPanel = !this.showMemberPanel
    }
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser
    }
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
    background-color: #FBFBFF;

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
          color: #fffbf9;

          p.username {
            margin: 0;
            font-family: 'KoHo';
          }

          .top-image{
            background: #222222;
            height: 48px;
            width: 48px;
            border-radius: 50%;
          }

          button {
            height: 100%;
            width: 20%;
            color: #fff;
            outline: none;
            cursor: pointer;

            i {
              transition: all linear .26s;
            }
          }
        }
      }

      .menu {
        position: absolute;
        right: 6px;
        background: #fff;
        box-shadow: 1px 1px 9px #ccc;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        z-index: 3;
        ul {
          margin: 0;
          li {
            list-style: none;

            .button {
              background: transparent;
              color: #333;
              border-top: 1px solid #f0f0f0;
              width: 100%;
              padding: .7rem 30px;
              font-family: 'KoHo';

              &:hover {
                background: #639fab;
                color: #f0f0f0;
              }
            }

            &:nth-child(2) {
              .button {
                border-bottom-right-radius: 12px;
                border-bottom-left-radius: 12px;
              }
            }
          }
        }
      }
    }

    div.container {
      padding: 25px;
      padding-bottom: 0;
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
