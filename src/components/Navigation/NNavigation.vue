<template>
  <ul class="navigation">
    <navigation-item v-for="item in items" :key="item.text">
      <navigation-link :url="item.url" :active="item.active">{{item.text}}</navigation-link>
    </navigation-item>
  </ul>
</template>
<script>
import NavigationItem from '@/components/Navigation/NavigationItem'
import NavigationLink from '@/components/Navigation/NavigationLink'
export default {
  name: 'NNavigation',
  props: {
    items: {
      type: Array,
      default: () => {}
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
