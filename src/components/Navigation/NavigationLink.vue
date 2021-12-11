<template>
  <a
    :href="url"
    class="navigation__link"
    :class="active ? 'navigation__link--active' : ''"
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'NavigationLink',
  props: {
    url: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.navigation__link {
  color: rgb(201, 201, 201);
  font-size: 1.4rem;
  text-decoration: none;
  margin: 0 0.8em;
}
.navigation__link--active {
  font-weight: bold;
  color: #fff;
}
</style>
