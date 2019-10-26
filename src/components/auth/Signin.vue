<template>
  <form v-on:submit.prevent="signIn">
    <div :class="{'spinner': loading}"></div>

    <div class="fields">
      <p v-if="error.has" style="color:#900707; text-align:center; background-color: #f88">{{ error.msg }}</p>
      <label for="username">
        E-mail:
      </label>
      <input type="email" id="username" placeholder="utente@vaccinecard.com" v-model="user.email" required>

      <label for="password">
        Password:
      </label>
      <input type="password" id="password" placeholder="Minha senha super segura ..." v-model="user.password" minlength="6" required>

      <div class="foot grid-x flex-dir-column-reverse ">
        <div class="cell grid-x">
          <label class="cell small-6  text-left grid-x align-left align-middle" for="remember">
            <input type="checkbox" name="remember" class="no-margin" id="remember"> Manter conectado
          </label>
          <router-link class="cell small-6 text-right" :to="{ name: 'Signup' }">Criar nova conta</router-link>
        </div>
        <button class="button"> Entrar</button>
      </div>
    </div>
  </form>
</template>
<style lang="scss" scoped>
  form {
    div.fields {
      margin-top: 2em;
      position: relative;

      div.foot{
        margin-top: 2em;
        div {
          input {
            margin-top: 2px;
          }
        }
       .button {
          position: relative;
          display: block;
          width: 100%;
          border-radius: 12px;
          font-size: 16px;
         font-family: 'KoHo', sans-serif;
        }
      }
    }
  }
  label {
    color: #fff;
    margin-bottom: 3px;
  }
</style>
<script>
import generateApi from '@/api.const'

export default {
  name: 'Signin',
  data: function () {
    return {
      user: {
        email: null,
        password: null
      },
      loading: false,
      loaded: false,
      error: {
        has: false,
        msg: ''
      }
    }
  },
  methods: {
    signIn () {
      this.loading = true
      this.$http.post(generateApi('auth/signin'), this.user)
        .then(({ data }) => {
          this.loading = false
          this.loaded = true

          localStorage.setItem('vaccine-card-token', data.token)
          localStorage.setItem('vaccine-card-user', JSON.stringify(data.user))

          setTimeout(_ => {
            this.$router.push({ name: 'account' })
          }, 1000)
        })
        .catch(({ response }) => {
          this.loading = false
          this.loaded = true
          this.error.has = true
          this.error.msg = 'Usuário ou senha incorrecto!'
        })
    }
  }
}
</script>
