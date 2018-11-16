<template>
  <div class="lgo">
    <h4 v-bind:style="{ 'font-size': size, 'color': color}"> Vaccine <span>Card</span></h4>
  </div>
</template>
<script>
export default {
  props: [
    'size',
    'color'
  ]
}
</script>

<style lang="scss" scoped>
  div.lgo {
    padding: 10px;
    align-items: center;

    h4 {
      font-family: KoHo;
      color: #fffbf9;
      margin:0;
      text-align: center;

      span {
        color:#639fab;
      }
    }
  }
</style>
