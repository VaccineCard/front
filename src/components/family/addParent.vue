<template>
  <div class="parent-form">
    <form v-on:submit="addNewParent()">
      <h3>Adicionando Parente</h3>
      <label for="name">
        E-mail do parente
        <input type="email" placeholder="E-mail do parente">
      </label>
      <button class="button button-success">Adicionar criança</button>
    </form>
  </div>
</template>
<script type="javascript">
export default {
  name: 'AddChild',
  computed: {
    user: function () {
      return this.$store.getters.getUser
    }
  }
}
</script>
<style lang="scss" scoped>
div {
    padding: 2em;
    color: #f0f0f0;
    padding-top: 6em;
}

h3 {
    color: #f0f0f0;
    border: 0;
    font-size: 15pt;
}
</style>
