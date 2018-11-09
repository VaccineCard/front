<template>
  <div class="menu">
    <ul>
      <li v-for="(item, index) of menuItem" v-bind:key="index">
        <router-link class="button" v-bind:to="{ name: item.link }"> {{ item.role }}</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  ul {
    width: 100%;
    margin: 0;
    padding: 0;

    li {
      list-style: none;

      .button {
        display: block;
        text-align: left;
        background: transparent;
        font-family: 'KoHo';
        font-size: 12pt;

        &:hover {
          background: rgba($color: #111111, $alpha: .9)
        }
      }
    }
  }

  .router-link-active {
    background-color: #639fab !important;
    border-left: 2px solid #111111;
  }
</style>
<script>
export default {
  name: 'Menu',
  data: function () {
    return {
      menuItem: [
        { role: 'Dashboard', link: 'dash' },
        { role: 'Pesquisar Vacina', link: 'search' },
        { role: 'Família', link: 'family' },
        { role: 'Doutores', link: 'doctors' },
        { role: 'Configurações', link: 'setting' }
      ]
    }
  }
}
</script>
