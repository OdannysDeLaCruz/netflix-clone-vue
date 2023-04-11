<template>
  <header class="header">
    <figure class="header__figure">
      <a href="/" class="header__principal-link">
        <img src="@/assets/images/icon-netflix.svg" class="header__principal-logo" alt="Netflix Clone Vue">
      </a>
    </figure>
    <n-navigation v-if="isLoggedProfile" :items="itemsNavPrincipal"></n-navigation>
    <div v-if="isLoggedProfile" class="header__navigation__secondary">
      <navigation-item>
        <input type="text" placeholder="Buscar">
      </navigation-item>
      <navigation-item>
        <navigation-dropdown v-on="$listeners"></navigation-dropdown>
      </navigation-item>
    </div>
  </header>
</template>
<script>
import NNavigation from '@/components/Navigation/NNavigation'
import NavigationItem from '@/components/Navigation/NavigationItem'
import NavigationDropdown from '@/components/Navigation/NavigationDropdown'
import { mapState } from 'vuex'
export default {
  name: 'NHeader',
  data: function () {
    return {
      itemsNavPrincipal: [
        { url: '/browse', text: 'Inicio', active: true },
        { url: '/series', text: 'Series', active: false },
        { url: '/movies', text: 'Películas', active: false },
        { url: '/latest', text: 'Novedades populares', active: false },
        { url: '/my-list', text: 'Mi lista', active: false }
      ],
      itemsNavDropdown: [
        { url: '/browse', text: 'Inicio', active: true },
        { url: '/series', text: 'Series', active: false },
        { url: '/movies', text: 'Películas', active: false },
        { url: '/latest', text: 'Novedades populares', active: false },
        { url: '/my-list', text: 'Mi lista', active: false }
      ]
    }
  },
  components: {
    NNavigation,
    NavigationItem,
    NavigationDropdown
  },
  computed: {
    ...mapState('LoginProfilePin', [
      'isLoggedProfile'
    ])
  },
  methods: {
    toggleSectionAuthPin (profile = null) {
      console.log('header', profile)
      this.$emit('rAuthPin', profile)
      // if (profile) {
      //   this.setProfileSelectedId(profile)
      // }
      // this.sectionAuthPin = !this.sectionAuthPin
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: calc(2rem + 1vh);
  margin-bottom: 3rem;
  padding: 0 calc(1rem + 1vw);
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
}
.header__figure {
  width: calc(7.0rem + 2vw);
  height: 100%;
  display: inline-flex;
  align-items: center;
  padding: 0px;
  margin-right: 3.5rem;
}
.header__principal-logo {
  width: 100%;
}
.header__navigation__secondary {
  display: flex;
  align-items: center;
  border: 1px solid tomato;
  padding: 2px;
  position: relative;
  margin-left: auto;
}
</style>
