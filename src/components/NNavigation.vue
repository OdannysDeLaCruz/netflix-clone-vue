<template>
  <ul class="navigation" :class="'navigation--' + type">
    <li class="navigation__item"><a href="" class="navigation__link navigation__link--active">Inicio</a></li>
    <li class="navigation__item"><a href="" class="navigation__link">Series</a></li>
    <li class="navigation__item"><a href="" class="navigation__link">Películas</a></li>
    <li class="navigation__item"><a href="" class="navigation__link">Novedades populares</a></li>
    <li class="navigation__item"><a href="" class="navigation__link">Mi lista</a></li>
  </ul>
</template>
<script>
export default {
  name: 'NNavigation',
  props: {
    type: {
      type: String,
      default: 'principal'
    }
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
.navigation__link {
  color: rgb(201, 201, 201);
  font-size: 1.4rem;
  text-decoration: none;
  margin: 0 .8em;
}
.navigation__link--active {
  font-weight: bold;
  color: #fff;
}
</style>
