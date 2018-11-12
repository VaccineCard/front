<template>
  <div class="mapbox">
    <div ref="map"></div>
  </div>
</template>
<style lang="scss" scoped>
  .mapbox {
    height: 100%;
    width: 100%;
    div {
      height: inherit;
      width: inherit;
    }
  }
</style>
<script>
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

export default {
  props: ['long', 'lat'],
  created: function () {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWNpZGluZXkiLCJhIjoiY2pvYzQzbndmMTl1bDNxbGUyb2phNjVhdyJ9.H4grVVSdWGZ1z7DYnDb1XA'
  },
  mounted: function () {
    this.map = new mapboxgl.Map({
      container: this.$refs.map,
      style: 'mapbox://styles/acidiney/cjoc561hy2va82slbsk29i380',
      center: [this.lat, this.long],
      zoom: 16
    })
  },
  data: function () {
    return {
      map: ''
    }
  }
}
</script>
