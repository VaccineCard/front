<template>
  <transition name="slide-fade">
    <div class="family_form">
      <form action="">
        <div class="step-1">
          <h4> Quem deseja adicionar </h4>
          <button class="button">Criança</button>
          <button class="button">Adulto</button>
        </div>
      </form>
    </div>
  </transition>
</template>
<style lang="scss" scoped >
  .family_form{
    position: absolute;
    width: 340px;
    height: 400px;
    background-color: #222;
    box-shadow: 1px 2px 9px #222;
    top: 20%;
    left: 0;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-right: 6px solid #639fab;

    form {
      color: #f0f0f0;
      text-align: center;
      box-sizing: border-box;
      padding: 15px;
      font-family: 'KoHo';

      .step-1 {
        h4 {
          font-family: 'KoHo';
        }
        padding-top: 45%;
      }
    }
  }
</style>
<script>
export default {
  name: 'AddFamilyMember',
  data: function () {
    return {
      children: {

      },
      adult: {

      }
    }
  }
}
</script>
