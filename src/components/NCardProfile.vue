<template>
  <li class="profile">
    <div class="profile__content">
      <a href="" class="profile__link">
        <div
          class="profile__img"
          :style="{backgroundImage: 'url(' + image +')'}"
        ></div>
        <span class="profile__username">{{ name }}</span>
      </a>
    </div>
  </li>
</template>
<script>
export default {
  name: 'NCardProfile',
  props: {
    image: {
      type: String,
      default: 'anonimo.png'
    },
    name: {
      type: String,
      default: 'Anónimo'
    }
  }
}
</script>
<style lang="scss" scoped>
.profile {
  margin-right: calc(2rem + 1vw);
  overflow: hidden;
  margin: 1.0em;
}
.profile__link {
  text-decoration: none;
}
.profile__link:hover {
  text-decoration: none;
}
.profile__link:hover .profile__img {
  box-shadow: inset 0 0 0 3px white;
}
.profile__link:hover .profile__username {
  color: white;
  font-weight: bold;
}
.profile__img {
  width: calc(8.0rem + 1vw);
  height: calc(8.0rem + 1vw);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  transition: ease all var(--time-transition-element);
}
.profile__username {
  width: 100%;
  font-size: calc(.5em + 1vw);
  display: block;
  color: grey;
  text-align: center;
  margin-top: 12px;
  font-weight: 500px;
}
@media (max-width: 800px) {
}
</style>
