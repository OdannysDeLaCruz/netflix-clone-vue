<template>
  <section class="browse-page">
    <n-header></n-header>
    <div class="container">
      <h1>¿Quien está viendo ahora?</h1>
    </div>
  </section>
</template>
<script>
import NHeader from '@/components/NHeader'
export default {
  name: 'BrowsePage',
  components: {
    NHeader
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
.container {
  display: flex;
  justify-content: center;
}
h1 {
  color: #fff;
}
</style>
