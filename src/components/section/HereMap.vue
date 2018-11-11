<template>
    <div class="here-map">
      <div ref="map"></div>
    </div>
</template>
<style lang="scss" scoped>
  .here-map {
    height: 100%;
    width: 100%;
    div {
      height: inherit;
      width: inherit;
    }
  }
</style>

<script>
export default {
  name: 'HereMap',
  created () {
    this.platform = new H.service.Platform({
      app_id: '1YYJUM43upxVT6IAMoVG',
      app_code: '70nlMC03RHevarYzsas2EQ',
      useCIT: true,
      useHTTPS: true
    })
  },
  mounted () {
    this.map = new H.Map(
      this.$refs.map,
      this.platform.createDefaultLayers().normal.map,
      {
        zoom: 14,
        center: { lng: this.lng, lat: this.lat }
      }
    )
  },
  props: {
    lat: String,
    lng: String
  },
  data: function () {
    return {
      map: {},
      platform: {}
    }
  }
}
</script>
