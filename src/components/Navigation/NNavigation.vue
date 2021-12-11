<template>
  <ul class="navigation" v-if="type == 'principal'">
    <navigation-item v-for="item in itemsLink" :key="item.text">
      <navigation-link :url="item.url" :active="item.active">{{item.text}}</navigation-link>
    </navigation-item>
  </ul>
  <ul class="navigation" v-else-if="type === 'secondary'">
    <navigation-item>
      mi link
    </navigation-item>
  </ul>
</template>
<script>
import NavigationItem from '@/components/Navigation/NavigationItem'
import NavigationLink from '@/components/Navigation/NavigationLink'
export default {
  name: 'NNavigation',
  props: {
    type: {
      type: String,
      default: 'principal'
    }
  },
  data: function () {
    return {
      itemsLink: [
        { url: '/browse', text: 'Inicio', active: true },
        { url: '/series', text: 'Series', active: false },
        { url: '/movies', text: 'Películas', active: false },
        { url: '/latest', text: 'Novedades populares', active: false },
        { url: '/my-list', text: 'Mi lista', active: false }
      ]
    }
  },
  components: {
    NavigationItem,
    NavigationLink
  }
}
</script>
<style lang="scss" scoped>
.navigation {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  height: 100%;
  list-style: none;
}
</style>
