<template>
    <div class="profile-pin-prompt">
        <div class="profile-pin__container">
          <img src="@/assets/icons/icon-close.svg" class="profile-pin__dismiss" alt="Cerrar" @click="toggleViewPin">
          <div class="profile-pin__status">El bloqueo de perfil está activado.</div>
          <div class="profile-pin__instruction">Ingresar tu PIN para acceder a este perfil.</div>
          <div class="profile-pin__wrapper">
              <div class="profile-pin__write-container">
                  <input type="tel" maxlength="1" class="profile-pin__input" tabindex="0" aria-label="Entrada de PIN 1." value="">
                  <input type="tel" maxlength="1" class="profile-pin__input" tabindex="0" aria-label="Entrada de PIN 2." value="">
                  <input type="tel" maxlength="1" class="profile-pin__input" tabindex="0" aria-label="Entrada de PIN 3." value="">
                  <input type="tel" maxlength="1" class="profile-pin__input" tabindex="0" aria-label="Entrada de PIN 4." value="">
              </div>
              <span class="profile-pin__input-error"></span>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'NProfilePinPrompt',
  methods: {
    toggleViewPin () {
      this.$emit('togglePinSection')
    }
  }
}
</script>
<style lang="scss" scoped>
:root {
  --width-input: calc(5rem + 2vw);
}
.profile-pin-prompt {
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.profile-pin__container {
  padding: 40px 0;
  max-width: 1000px;
  width: 100%;
  position: relative;
}
.profile-pin__dismiss {
  position: absolute;
  top: 0px;
  right: 2.0rem;
  min-width: 1rem;
  max-width: 2.5rem;
  width: calc(1rem + 1vw);
  cursor: pointer;
  color: #fff;
}
.profile-pin__status {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, .8);
  margin-bottom: 2.0rem;
  text-align: center;
}
.profile-pin__instruction {
  font-size: 2rem;
  margin-bottom: 2.0rem;
  font-weight: bold;
  text-align: center;
}
.profile-pin__write-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.0rem;
}
.profile-pin__input {
  --width-input: calc(5rem + 2vw);
  margin: .5rem;
  padding: .15rem;
  border: 1px solid #fff;
  width: var(--width-input);
  height: var(--width-input);
  font-size: 3rem;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0px;
  transition: transform ease-out .1s;
}
.profile-pin__input:focus {
  border-radius: 0px;
  outline: none;
  transform: scale(1.1);
}
@media (min-width: 576px) {
  .profile-pin__status {
    font-size: 1.5rem;
  }
  .profile-pin__instruction {
    font-size: 3.5rem;
  }
}
@media (min-width: 768px) {
  .profile-pin__input {
    --width-input: calc(8rem + 2vw);
  }
}
</style>
