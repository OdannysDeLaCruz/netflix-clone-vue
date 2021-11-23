<template>
  <li class="profile">
    <div class="profile__content">
      <a href="" class="profile__link">
        <div
          class="profile__img"
          :style="{backgroundImage: 'url(' + profile.image +')'}"
        ></div>
        <span class="profile__username">{{ profile.name }}</span>
        <span class="profile__pin">
          <img v-if="profile.pin" class="profile__pin__img" src="@/assets/icons/icon-lock.svg" alt="Icono de candado">
        </span>
      </a>
    </div>
  </li>
</template>
<script>
export default {
  name: 'NCardProfile',
  props: {
    profile: {
      type: Object,
      default: null
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
  width: calc(9.0rem + 1vw);
  height: calc(9.0rem + 1vw);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  transition: ease all var(--time-transition-element);
}
.profile__username {
  width: 100%;
  font-size: calc(.4em + 1vw);
  display: block;
  color: grey;
  text-align: center;
  margin-top: 12px;
  font-weight: 500px;
}
.profile__pin {
  display: flex;
  margin-top: 20px;
  width: 100%;
  height: 20px;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.profile__pin__img {
  width: 20px;
}
</style>
