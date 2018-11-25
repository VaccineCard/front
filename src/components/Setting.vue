<template>
  <transition name="fade">
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="info small-12 auto">
          <h3> Configurações</h3>
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
    min-height: 312px;
    max-height: 450px;
    box-shadow: 1px 0px 9px #dedede;
    text-align: center;
    h4 {
      font-family: 'KoHo';
    }

    div {
      p {
        font-family: 'KoHo';
        margin-top: 50%;
        color: #639fab;
      }
    }
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

    h3 {
      font-family: 'KoHo';
    }

    .waiting {
      box-sizing: border-box;
      height: 100%;
      padding-top: 23%;

      h5 {
        font-family: "KoHo";
        color: #639fab;
      }
    }

    .information {
      .profile {
        .photo {
          height: 200px;
          width: 200px;
          border-radius: 50%;
          background-color: #639fab;
          text-align: center;
          padding-top: 40%;
          box-sizing: border-box;
          span {
            font-family: 'KoHo';
            color: #555;
            background-color: #ccc;
            border-radius: 12px;
            padding: 8px;
          }
        }

        .details {
          text-align: left;
          padding: 12px;

          label {
            font-family: 'KoHo';
            font-weight: bolder;
            font-size: 12pt;
          }
        }
      }

      .vaccines {
        padding-top: 12px;
        h5 {
          font-family: 'KoHo';
          text-align: center;
        }
        table {
          border-radius: 12px;
          thead {
            tr {
              td {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>
<script>
// import generateApi from '@/api.const'

export default {
  name: 'Settings',
  data: function () {
    return {
    }
  },
  computed: {

  },
  methods: {
  }
}
</script>
