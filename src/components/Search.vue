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
        <div class="map cell auto">
          <h4> Carregando... Google maps (^-^) </h4>
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
    box-shadow: 1px 0px 9px #eee;
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
  .map {
    margin-left: 12px;
    background-color: #ddd;
    height: 500px;
    text-align: center;
    color: #fff;
    vertical-align: middle;
    box-sizing: border-box;
    padding: 190px;
  }
</style>
