<template>
  <transition name="fade-in-profile-pin">
      <div class="profile-pin-prompt" v-if="showPin">
          <div class="profile-pin__container">
            <img src="@/assets/icons/icon-close.svg" class="profile-pin__dismiss" alt="Cerrar" @click="toggleViewPin">
            <div class="profile-pin__status">El bloqueo de perfil está activado.</div>
            <div class="profile-pin__instruction">Ingresar tu PIN para acceder a este perfil.</div>
            <div class="profile-pin__wrapper">
                <div class="profile-pin__write-container">
                    <input type="tel" maxlength="1" class="profile-pin__input" tabindex="0" aria-label="Entrada de PIN 1." value="" v-model="pin1" ref="pin" @input="stepsPin" @keyup.delete.stop="stepsPin">
                    <input type="tel" maxlength="1" class="profile-pin__input" tabindex="0" aria-label="Entrada de PIN 2." value="" v-model="pin2" ref="pin2" @input="stepsPin" @keyup.delete.stop="stepsPin">
                    <input type="tel" maxlength="1" class="profile-pin__input" tabindex="0" aria-label="Entrada de PIN 3." value="" v-model="pin3" ref="pin3" @input="stepsPin" @keyup.delete.stop="stepsPin">
                    <input type="tel" maxlength="1" class="profile-pin__input" tabindex="0" aria-label="Entrada de PIN 4." value="" v-model="pin4" ref="pin4" @input="stepsPin" @keyup.delete.stop="stepsPin">
                </div>
                <span class="profile-pin__input-error"></span>
            </div>
          </div>
      </div>
    </transition>
</template>
<script>
export default {
  name: 'NProfilePinPrompt',
  props: {
    showPin: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: ''
    }
  },
  methods: {
    toggleViewPin () {
      this.$emit('togglePinSection')
    },
    verifyInputPin () {
      return (this.pin1 && this.pin2 && this.pin3 && this.pin4) || false
    },
    stepsPin (event) {
      if (event.type === 'input') {
        const valuePin = event.target.value
        if (valuePin) {
          const nextPin = event.target.nextSibling
          if (nextPin) {
            nextPin.focus()
            if (nextPin.value) {
              nextPin.select()
            }
          } else {
            this.verifyInputPin() ? console.log('Ingresar') : console.log(false)
          }
        }
      }
      if (event.type === 'keyup') {
        if (event.code === 'Backspace' || event.keyCode === 8) {
          const prevPin = event.target.previousSibling
          if (prevPin) {
            prevPin.focus()
            prevPin.select()
          }
        }
      }
    }
  },
  watch: {
    showPin: function (newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$refs.pin.focus()
        })
      }
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
.fade-in-profile-pin-enter-active,
.fade-in-profile-pin-leave-active {
  transition: all .3s;
}
.fade-in-profile-pin-enter,
.fade-in-profile-pin-leave-to {
  opacity: 0;
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
