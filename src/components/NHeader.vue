<template>
  <header class="header">
    <figure class="header__figure">
      <a href="/" class="header__principal-link">
        <img src="@/assets/images/icon-netflix.svg" class="header__principal-logo" alt="Netflix Clone Vue">
      </a>
    </figure>
    <!-- <div v-if="isLoggedProfile"> -->
      <n-navigation v-if="isLoggedProfile" type="principal"></n-navigation>
    <!-- </div> -->
  </header>
</template>
<script>
import NNavigation from '@/components/NNavigation'
import { mapState } from 'vuex'
export default {
  name: 'NHeader',
  components: {
    NNavigation
  },
  computed: {
    ...mapState('LoginProfilePin', [
      'isLoggedProfile'
    ])
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
</style>
