<template>
  <div class="auth">
    <transition name="fade">
      <div class="panel-form">
        <app-logo size="2.5625rem" color="#639fab"/>
        <div class="form">
          <router-view></router-view>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
  .auth {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #373737;
    .panel-form {
      width: 80vw;
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
