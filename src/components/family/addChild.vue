<template>
  <div class="child-form">
    <form v-on:submit="addNewChildToFamily()">
      <h3>Adicionando criança</h3>
      <label for>
        Imagem da criança:
        <input type="file" placeholder="image">
      </label>
      <label for="name">
        Nome da Criança
        <input type="text" placeholder="Nome da criança">
      </label>
      <div class="grid-x grid-margin-x">
        <label class="cell small-6" for>
          Nome do Pai:
          <input type="text" placeholder="Nome do pai" v-model="user.name" disabled>
        </label>
        <label class="cell small-6" for>
          Nome da Mãe:
          <input type="text" placeholder="Nome da mãe">
        </label>
      </div>
      <div class="grid-x grid-margin-x">
        <label class="cell small-6" for>Data de nascimento
          <v-date-picker
            mode="single"
            popover-direction="top"
            v-model="user.birth"
            placeholder="YYYY-MM-DD"
            show-caps
          ></v-date-picker>
        </label>
        <label class="cell small-6" for>
          Carregue o cartão de vacina da criança:
          <input type="file" placeholder="vaccine card">
        </label>
      </div>
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
  form {
    border-bottom: 6px solid #639fab;
    max-width: 900px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 1px 0px 9px #ccc;
    padding: 30px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    h4 {
      text-align: center;
    }

    button.button-success {
        margin-top: 1em;
        margin-left: 40%;
    }
  }
}
</style>
