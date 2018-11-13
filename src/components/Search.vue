<template>
  <transition name="fade">
    <div class="grid-container">
      <div class="grid-x">
        <div class="search-mechanism cell small-3">
            <form>
              <h4> Qual vacina procura? </h4>
              <label for="search">
                <input type="text" id="search" />
              </label>
              <div>
                Para quem é essa vacina?
                <label><input type="radio" name="nameVacine" value="humano" checked> Humano</label>
                <label><input type="radio" name="nameVacine" value="animal"> Animal</label>
              </div>
              <button class="button"> Procurar</button>
            </form>
        </div>
        <div class="list cell auto">
         <h3> Encontrados { x } registros </h3>
         <table>
           <thead>
             <tr>
               <th> Nome </th>
               <th> Localidade </th>
               <th> Ação </th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td> Dr. Miguel </td>
               <td> Viana </td>
               <td> <button class="button"> Ver no mapa </button> </td>
             </tr>
             <tr>
               <td> Dr. Miguel </td>
               <td> Viana </td>
               <td> <button class="button"> Ver no mapa </button> </td>
             </tr>
             <tr>
               <td> Dr. Miguel </td>
               <td> Viana </td>
               <td> <button class="button"> Ver no mapa </button> </td>
             </tr>
             <tr>
               <td> Dr. Miguel </td>
               <td> Viana </td>
               <td> <button class="button"> Ver no mapa </button> </td>
             </tr>
             <tr>
               <td> Dr. Miguel </td>
               <td> Viana </td>
               <td> <button class="button"> Ver no mapa </button> </td>
             </tr>
           </tbody>
           <tfoot>
             <tr>
               <td colspan="3"> Paginação </td>
             </tr>
           </tfoot>
         </table>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
  .search-mechanism {
    border-top: 6px solid #639fab;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #fff;
    padding: 25px;
    max-height: 312px;
    box-shadow: 1px 0px 9px #dedede;
    text-align: center;

    form {
      h4 {
        font-family: 'KoHo';
      }
      div {
        display: block;
        label {
          text-align: left;
        }
      }
      button {
        background-color: #1c5d99;
        padding: 5px 20px;
        color: #fff;
        cursor: pointer;
        border-radius: 12px;
        &:hover {
          background-color: #0f3b64;
        }
      }
    }
  }
  .list {
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

    table {
      thead {
        tr {
          th {
            text-align: center;
          }
        }
      }
      tbody {
        tr {
          td {
            .button {
              margin-bottom: 0;
              background-color: transparent;
              color: #0f3b64;
              cursor: pointer;
            }
          }
        }
      }
      tfoot {
        tr {
          td {
            text-align: center;
          }
        }
      }
    }
  }
</style>
<script>
// import MapBox from '@/components/section/MapBox.vue'
export default {
  name: 'Search',
  components: {
  }
}
</script>
