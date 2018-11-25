<template>
  <div class="auth">
    <div class="background"></div>
    <transition name="fade">
      <div class="panel-form">
        <app-logo size="2.5625rem" color="#f88"/>
        <div class="form">
          <router-view></router-view>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
  div.auth {
    height: 100%;
    width: 100%;
    position: relative;
    div.background {
      height: inherit;
      width: inherit;
      background: url('../assets/background.jpg') no-repeat;
      background-size: cover;
      background-position: center center;
      filter: blur(3px);
      z-index: -1;
      position: absolute;

    }
    div.panel-form {
      background-color: #f0f0f0;
      width: 400px;
      height: 500px;
      z-index: 1;
      position: fixed;
      left: 84px;
      top: 6pc;
      border-top: 3px solid #fffbf9;
      border-bottom: 3px solid #fffbf9;
      box-shadow: 1px 1px 9px rgba(51, 0, 0, .4);
      .lgo {
        margin-top: 12px;
        h4 {
          font-size: 4pt;
        }
      }

      .form {
        box-sizing: border-box;
        padding: 20px;
        padding-top: 5px;
      }
    }
  }
</style>

<script>
import Logo from '../components/section/Logo.vue'

export default {
  name: 'Auth',
  components: {
    'app-logo': Logo
  },
  created: function () {
    document.title = 'Vaccine Card :. Authentication'
  }
}
</script>
