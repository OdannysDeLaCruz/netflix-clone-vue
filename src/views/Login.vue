<template>
 <transition name="fade" appear>
    <section class="login-page">
      <div class="login-page__base-background"></div>
      <n-header></n-header>
      <main>
        <form action="#" class="form-login" @submit.prevent="login">
          <h1 class="form-login__title">Inicia sesión</h1>
          <input type="text" v-model="user.username" class="form-login__input" placeholder="Email o número de teléfono" autofocus autocomplete="on">
          <input type="password" v-model="user.password" class="form-login__input" placeholder="Contraseña">
          <button type="submit" class="form-login__btn form-login__btn--primary">Iniciar sesión</button>
          <span class="form-login__need-help">
            <span class="remember-me">
                <label>
                  <input type="checkbox" class="remember-me__check">
                  <span class="remember-me__text">Recuerdame</span>
                </label>
            </span>
            <a href="#" class="need-help-link">¿Necesitas ayuda?</a>
          </span>
        </form>
      </main>
    </section>
  </transition>
</template>
<script>
import NHeader from '@/components/NHeader'
import { mapGetters } from 'vuex'
export default {
  name: 'LoginPage',
  data: function () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    NHeader
  },
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.user).then((res) => {
        if (res) {
          this.$router.push('/browse')
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  background: #000;
  padding: calc(1em + 1vw) 0;
  position: relative;
  min-height: 100vh;
}
.login-page__base-background {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 0;
}
.form-login {
  // z-index: 2;
  position: relative;
  margin: auto;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30rem;
  // opacity: 0;
}
.form-login__title {
  color: #fff;
  font-size: 32px;
  padding: 0;
  margin: 0 0 3rem 0;
}
.form-login__input {
  padding: 1.5rem;
  background-color: var(--gray-color);
  color: #ffffff;
  margin-bottom: 1.5rem;
  border: none;
  font-size: 1.5rem;
  letter-spacing: .3px;
  border-radius: .4rem;
}
.form-login__input::placeholder {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff5d;
}
.form-login__btn {
  background: var(--red-color);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 1.5rem;
  margin-top: 2em;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
}
.form-login__btn--primary {
  background: var(--red-color);
  color: #ffffff;
  font-weight: bold;
}
.form-login__need-help {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.remember-me {
  display: flex;
  align-items: center;
}
.remember-me__text {
  color: #ffffff;
  margin-left: 1rem;
  font-size: 1.3rem;
  color: #cccccc;
}
.need-help-link {
  color: #ffffff;
  font-size: 1.3rem;
  color: #cccccc;
  text-decoration: none;
}
.fade-enter-active {
  transition: all .8s;
}
.fade-leave-active {
  transition: all .2s;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.2);
}
.fade-leave-to {
  opacity: 0;
}
@media only screen and (min-width: 600px) {
  .login-page {
    background-image: url('/assets/images/background-image-desktop.jpg');
    background-color: rgb(0,0, 0, 1);
    background-repeat: no-repeat;
  }
  .form-login {
    width: 450px;
    padding: 60px 68px 40px;
    background: rgb(0,0, 0, .7);
  }
}
</style>
