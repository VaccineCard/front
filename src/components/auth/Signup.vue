<template>
    <form v-on:submit.prevent="signUp">
      <div :class="{'spinner': loading}"></div>
      <hr>
      <ul class="steps">
        <li class="step" v-bind:class="{'active': op === 1}"> Dados </li>
        <li class="step" v-bind:class="{'active': op === 2}"> Endereço </li>
        <li class="step" v-bind:class="{'active': op === 3}"> Segurança </li>
      </ul>

      <div class="fields">
        <div class="data"  v-if="(op == 1)">
          <label for="name"> Nome:
            <input type="text" name="name" v-model="user.name" placeholder="Escreva seu nome aqui" required>
          </label>
          <label for="email"> E-mail:
            <input type="email" name="email"
            placeholder="Escreva o seu e-mail aqui"
            v-model="user.email" required>
          </label>
          <div class="grid-x grid-margin-x">
            <label for="gender" class="cell medium-6"> Genêro:
              <select name="gender" required>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </label>
            <label for="gender" class="cell medium-6"> Data de nascimento:
              <v-date-picker
                mode='single'
                popover-direction="top"
                v-model="user.birth"
                placeholder = "YYYY-MM-DD"
                show-caps>
              </v-date-picker>
            </label>
          </div>
        </div>
        <div class="location" v-if="(op == 2)">
          <label for="countries"> Selecione um país:
            <select v-on:change="getStatesById(user.country_id)" required
              id="countries" v-model="user.country_id">
              <option v-for="country of locations.countries"
                      v-bind:key="country.id"
                      v-bind:value="country.id"
                > {{ country.name }} </option>
            </select>
          </label>
          <label for="states"> Província:
              <select id="states" v-model="user.state_id" required>
                <option v-for="state of locations.states"
                        v-bind:key="state.id"
                        v-bind:value="state.id"
                  > {{ state.name }} </option>
              </select>
          </label>
          <label for="phone"> Telefone: <br />
          <div class="input-group">
            <span class="input-group-label">{{ dial_code || 'Code' }}</span>
            <input class="input-group-field"
                    type="number" name="number"
                    v-model="user.phone"
                    placeholder="Escreva seu número de telefone aqui"
                    maxlength="9"
              required>
          </div>
          </label>
        </div>
        <div class="security"  v-if="(op == 3)">
        <p v-if="error.has || success.has"
          :class="{'error': error.has, 'success': success.has}"
          >{{ error.msg || success.msg}}</p>

          <label for="password"> Palavra-Passe:
            <input type="password" name="password" v-model="user.password"
            placeholder="Palavra-Passe" minlength="6" required>
          </label>
          <label for="cpassword"> Confirme a palavra-passe:
            <input type="password" name="cpassword"
              v-model="cpassword" placeholder="Confirme a palavra-passe"
              minlength="6" required>
          </label>
        </div>
  <router-link :to="{ name: 'Signin' }">Já tenho uma conta</router-link>
        <div class="foot">
          <button class="button" type="button" v-if="!(op == 3)" v-on:click="changeStep(1)"> Avançar </button>
          <button class="button" type="submit" v-if="(op == 3)" > Finalizar </button>
          <button class="button" type="button" v-if="!(op == 1)" v-on:click="changeStep(-1)"> Voltar </button>
        </div>
      </div>
    </form>
</template>
<style lang="scss" scoped>
form {
  hr {
    border: 1px solid #ddd;
  }
  ul.steps {
    margin: 0;
    padding: 0;
    width: 90%;
    position: absolute;
    top: 6em;
    display: flex;
    justify-content: space-evenly;
    li.step {
      background-color: #639fab;
      list-style: none;
      height: 40px;
      text-align: center;
      box-sizing: border-box;
      color: #f0f0f0;
      font-family: "KoHo";
      border-radius: 12px;
      padding: 0 12px;
      padding-top: 6px;
    }
  }

  div.fields {
    margin-top: 30px;
    position: relative;

    div.foot {
      margin-top: 2em;
      .button {
        float: right;
      }
    }
  }
}
.error {
  color:#900707;
  text-align:center;
  background-color: #f88;
  padding: 5px 0px;
}
.success {
  color:#1567b4;
  text-align:center;
  background-color: rgb(7, 89, 143);
  padding: 5px 0px;
}
.active {
  background-color: #1a2021 !important;
}
</style>
<script>
import generateApi from '@/api.const'
export default {
  name: 'Signup',
  components: {},
  watch: {
    wGetAllCountries: {
      handler: 'getAllCountries',
      immediate: true
    }
  },
  data: function () {
    return {
      op: 1,
      user: {
        name: null,
        email: null,
        password: null,
        gender: 'M',
        phone: null,
        state_id: null,
        country_id: null,
        birth: new Date()
      },
      loading: false,
      error: {
        has: false,
        msg: null
      },
      success: {
        has: false,
        msg: null
      },
      locations: {
        countries: [],
        states: []
      },
      dial_code: null,
      cpassword: null
    }
  },
  methods: {
    changeStep: function (value) {
      this.op += value
    },
    getAllCountries: function () {
      this.loading = true
      if (!localStorage.getItem('vaccine-cart-countries')) {
        this.$http
          .get(generateApi('locations/countries'))
          .then(({ data }) => {
            this.locations.countries = data.countries
            localStorage.setItem(
              'vaccine-cart-countries',
              JSON.stringify(data.countries)
            )
            console.log('Dados carregados', data.countries)
          })
          .catch(({ response }) => {
            console.log(response)
          })
        this.loading = false
      } else {
        this.locations.countries = JSON.parse(
          localStorage.getItem('vaccine-cart-countries')
        )
        console.log('Dados carregados')
        this.loading = false
      }
    },
    getStatesById: function (id) {
      this.loading = true
      this.getDialPhone()
      this.$http
        .get(generateApi(`locations/countries/${id}/states`))
        .then(({ data }) => {
          this.locations.states = data.states
          console.log('States loaded', data.states)
          this.loading = false
        })
        .catch(({ response }) => {
          console.log(response)
          this.loading = false
        })
    },
    getDialPhone: function () {
      for (let i = 0; i <= this.locations.countries.length - 1; i++) {
        if (this.locations.countries[i].id === this.user.country_id) {
          this.dial_code = '+' + this.locations.countries[i].code
        }
      }
    },
    signUp: function () {
      this.loading = true
      this.user.birth = this.user.birth.toLocaleDateString().split('/').reverse().join('-')
      if (this.user.password === this.cpassword) {
        this.$http.post(generateApi('auth/signup'), this.user)
          .then(_ => {
            this.success.has = true
            this.success.msg = 'Usuário criado com successo!'
            setTimeout(_ => {
              this.$router.push({ name: 'auth' })
            }, 2000)
          })
          .catch(({ response }) => {
            this.error.has = true
            this.error.msg = 'Usuário já existe ^-^, tente entrar!'
          })
        this.loading = false
      } else {
        this.error.has = true
        this.error.msg = 'Palavras-passe são diferentes'
        this.loading = false
      }
    }
  }
}
</script>
