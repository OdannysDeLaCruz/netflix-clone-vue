<template>
  <section class="browse-page">
    <n-header></n-header>
     <transition name="fade-in-section-profiles" appear>
      <div class="main__container">
        <h1 class="main__title">¿Quién está viendo ahora?</h1>
        <section class="main__profiles">
          <ul class="main__profiles__list" >
            <n-card-profile
            v-for="profile in getProfileList"
            :key="profile.id"
            :profile="profile"
            @requiredAuthPin="togglePinSection"
            ></n-card-profile>
          </ul>
          <button class="main__profiles_button_admin">Administrar perfiles</button>
        </section>
      </div>
     </transition>
      <n-profile-pin-prompt @togglePinSection="togglePinSection" :showPin="showPin"></n-profile-pin-prompt>
  </section>
</template>
<script>
import NHeader from '@/components/NHeader'
import NCardProfile from '@/components/NCardProfile'
import NProfilePinPrompt from '@/components/NProfilePinPrompt'
import { mapGetters } from 'vuex'
export default {
  name: 'BrowsePage',
  data: function () {
    return {
      showPin: false
    }
  },
  components: {
    NHeader,
    NCardProfile,
    NProfilePinPrompt
  },
  computed: {
    ...mapGetters([
      'getProfileList'
    ])
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    togglePinSection () {
      this.showPin = !this.showPin
      // console.log('desde browse', this.$refs)
      // this.$nextTick(() => {
      //   // this.$refs.pin.focus()
      //   console.log(document.querySelector('#pin').focus())
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
.browse-page {
  background: #000;
  padding: calc(1em + 1vw) 0;
  position: relative;
  min-height: 100vh;
}
.main__container {
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.main__title {
  color: #fff;
  font-size: calc(2.0rem + 2vw);
  margin: 5.0rem 0 2.0rem;
  font-weight: 400;
  text-align: center;
  transition: ease all var(--time-transition-element);
}
.main__profiles {
  max-width: var(--main-profiles-width);
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.main__profiles__list {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.main__profiles_button_admin {
  background: none;
  border: 1px solid grey;
  // text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 300;
  padding: 5px 20px;
  color: grey;
  margin: 20px auto;
}
.main__profiles_button_admin:hover {
  color: white;
  border-color: white;
}
.fade-in-section-profiles-enter-active {
  transition: all 1s;
}
.fade-in-section-profiles-enter {
  opacity: 0;
  transform: scale(1.2);
}
</style>
