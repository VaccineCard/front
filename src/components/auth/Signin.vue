<template>
  <form v-on:submit.prevent="signIn">
    <div :class="{'spinner': loading}"></div>
    <ul class="steps">
      <li class="step"> Entrando </li>
    </ul>

    <div class="fields">
      <p v-if="error.has" style="color:#900707; text-align:center; background-color: #f88">{{ error.msg }}</p>
      <label for="username">
        Correio Electrónico: <br />
        <input type="email" id="username" placeholder="paciente@vaccinecard.com" v-model="user.email" required>
      </label>
      <label for="password">
        Palavra-Passe: <br />
        <input type="password" id="password" placeholder="Minha senha ..." v-model="user.password" minlength="6" required>
      </label>
      <div class="foot grid-x">
        <div>
          <label for="remeber">
            <input type="checkbox" name="remeber" id="remember"> Manter conectado
          </label>
          <router-link :to="{ name: 'Signup' }">Criar nova conta</router-link>
        </div>
        <button class="button"> Entrar</button>
      </div>
    </div>
  </form>
</template>
<style lang="scss" scoped>
  form {
      ul.steps {
        margin: 0;
        padding: 0;
        border:1px solid #ddd;
        width: 100%;
        position: relative;
        li.step {
            background-color: #639fab;
            list-style: none;
            position: absolute;
            padding: 5px;
            color: #f0f0f0;
            font-family: 'KoHo';
            border-radius: 12px;
            top: -19px;
            left: 40%;
      }
    }

    div.fields {
      margin-top: 3em;
      position: relative;

      div.foot{
        margin-top: 2em;

        div {
          label {
            input {
            margin-top: 2px;
            }
          }
          a {
            margin-left: 24px;
          }
        }
       .button {
        position: absolute;
        right: 10px;
        padding: 10px 3em;
        margin-top: 10px;
        }
      }
    }
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
