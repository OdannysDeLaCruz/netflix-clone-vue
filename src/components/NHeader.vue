<template>
  <header class="header">
    <figure class="header__figure">
      <a href="/" class="header__principal-link">
        <img src="@/assets/images/icon-netflix.svg" class="header__principal-logo" alt="Netflix Clone Vue">
      </a>
    </figure>
  </header>
</template>
<script>
export default {
  name: 'NHeader'
}
</script>
<style lang="scss" scoped>
.header {
  height: calc(2rem + 1vh);
  margin-bottom: 3rem;
  padding: 0 calc(1rem + 1vw);
  position: relative;
  z-index: 10;
}
.header__figure {
  width: calc(7.0rem + 2vw);
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px;
}
.header__principal-logo {
  width: 100%;
}
</style>
