<template>
  <section class="login-page">
    <div class="login-page__base-background"></div>
    <n-header></n-header>
    <main>
      <form action="#" class="form-login">
        <h1 class="form-login__title">Inicia sesión</h1>
        <input type="text" class="form-login__input" placeholder="Email o número de teléfono">
        <input type="password" class="form-login__input" placeholder="Contraseña">
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
</template>
<script>
import NHeader from '@/components/NHeader'
export default {
  name: 'LoginPage',
  components: {
    NHeader
  }
}
</script>
script
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
  padding: calc(1em + 1vw);
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30em;
  // border: 1px solid yellow;
}
.form-login__title {
  color: #fff;
  font-size: calc(1.7em + 1vw);
  padding: 0;
  margin: 0 0 .9em 0;
}
.form-login__input {
  padding: 1em;
  background-color: var(--gray-color);
  color: #ffffff;
  margin-bottom: 1em;
  border: none;
  font-size: 1em;
  letter-spacing: .3px;
  border-radius: 4px;
}
.form-login__input::placeholder {
  font-size: .9em;
  font-weight: 300;
  color: #ffffff5d;
}
.form-login__btn {
  background: var(--red-color);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 1em;
  margin-top: 2em;
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
  margin-top: 1em;
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
  margin-left: .5em;
  font-size: .8em;
  color: #cccccc;
}
.need-help-link {
  color: #ffffff;
  font-size: .8em;
  color: #cccccc;
  text-decoration: none;
}
@media only screen and (min-width: 600px) {
  .login-page {
    background-image: url('/assets/images/background-image-desktop.jpg');
    background-color: rgb(0,0, 0, 1);
    background-repeat: no-repeat;
  }
  .form-login {
    width: 450px;
    padding: calc(2em + 1vw);
    background: rgb(0,0, 0, .7);
  }
}
</style>
