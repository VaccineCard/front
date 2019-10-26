<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: KoHo;
  src: url(assets/fonts/KoHo/KoHo-Medium.ttf);
  font-weight: 900;
}

#app {
  height: 100%;
}

.no-margin {
  margin: 0;
}

*{
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
<script>
export default {
  created: function () {
    document.title = 'Vaccine Card'
  }
}
</script>
