<template>
  <transition name="fade">
    <div class="grid-container">
      <div class="grid-x">
        <div class="list-family-members cell small-3">
          <h4> Membros na família </h4>
        </div>
        <div class="info cell auto">
         <h3> Vacccine user </h3>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
  .list-family-members {
    border-top: 6px solid #639fab;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #fff;
    padding: 25px;
    max-height: 312px;
    box-shadow: 1px 0px 9px #dedede;
    text-align: center;
  }
  .info {
    margin-left: 12px;
    height: 500px;
    text-align: center;
    background-color: #fff;
    vertical-align: middle;
    box-sizing: border-box;
    padding: 15px;
    box-shadow: 1px 0px 9px #dedede;
    border-bottom: 6px solid #639fab;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
</style>
<script>
export default {
  name: 'Search',
  components: {
  }
}
</script>
