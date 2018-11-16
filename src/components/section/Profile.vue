<template>
  <div class="profile grid-x grid-padding-x">
    <div class="cell small-3">
      <div class="image"></div>
    </div>
    <div class="cell auto">
      <p> {{ name }} <br />
      <small>{{ typeaccount }}</small></p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  div.profile {
    background-color: transparent;
    padding: 15px 0px;
  }
  .image {
    background: #639fab;
    height: 48px;
    width: 48px;
    border-radius: 50%;
  }

  p {
    // margin-top: 7px;
    color: #fffbf9;
    font-family: 'KoHo';
    font-size: 12pt;
  }
</style>
<script>
export default {
  name: 'Profile',
  props: [
    'name',
    'typeaccount'
  ]
}
</script>
