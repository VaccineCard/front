<template lang="html">
  <div>
    <div class="cell" onloadedmetadata="">
      <div class="card" v-bind:style="{'background-color': data.background}">
        <div class="icon">
          <i class="fa" v-bind:class="data.icon"></i>
        </div>
        <div class="card-section">
          <h4>{{data.title}}</h4>
          <p>Quantidade: {{data.qtd}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: row;
    width: 15pc;
    color: #222e22;
    padding: 12px;
    box-shadow: 0px 0px 9px #ccc;

    div.icon {
      display: flex;
      padding-left: 15px;
      vertical-align: middle;
      justify-content: center;
      align-items: center;
      text-align: center;

        i {
          font-size: 25pt;
        }
    }
    .card-section {
      text-align: center;
      h4, p {
        font-family: 'KoHo' !important;
      }
    }
  }
</style>
