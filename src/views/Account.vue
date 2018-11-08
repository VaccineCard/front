<template>
  <div class="grid-container fluid">
    <div class="grid-x">
      <div class="cell small-3 slidebar">
        <div class="logotipo">
          <app-logo></app-logo>
        </div>
      </div>
      <div class="cell auto content">
        <app-dashboard></app-dashboard>
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
import Logo from '@/components/Logo.vue'
export default {
  name: 'Account',
  components: {
    'app-dashboard': Dashboard,
    'app-logo': Logo
  }
}
</script>

<style lang="scss" scoped>
  div.fluid{
    height: 100%;
    padding: 0;
    margin: 0;
  }

  div.content {
    background-color: #fffcff;
  }

  .grid-x {
    height: 100%;

    div.slidebar {
      background: #222222;

      div.logotipo {
        background-color: #1c5d99;
      }
    }
  }
</style>
