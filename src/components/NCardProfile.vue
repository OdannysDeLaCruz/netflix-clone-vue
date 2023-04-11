<template>
  <li class="profile" @click="requiredAuthPin">
    <a href="#" class="profile__link" @click.prevent="">
      <div class="profile__content" :class="'profile--'+display">
        <div class="profile__img" :style="{backgroundImage: 'url(' + profile.image +')'}"></div>
        <span class="profile__username">{{ profile.name }}</span>
        <span class="profile__pin">
          <img v-if="profile.auth" class="profile__pin__img" src="@/assets/icons/icon-lock.svg" alt="Icono de candado">
        </span>
      </div>
    </a>
  </li>
</template>
<script>
export default {
  name: 'NCardProfile',
  props: {
    profile: {
      type: Object,
      default: null
    },
    display: {
      type: String,
      default: ''
    }
  },
  methods: {
    showMainView () {
      this.$emit('showMainView')
    },
    requiredAuthPin () {
      // console.log(this.$listeners)
      if (this.profile.pin) {
        this.$emit('requiredAuthPin', this.profile.id)
      } else {
        console.log('Ingresando...')
        this.showMainView()
      }
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
.profile__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile__img {
width: calc(9rem + 2vw);
height: calc(9rem + 2vw);
background-repeat: no-repeat;
background-size: cover;
border-radius: 4px;
transition: ease all var(--time-transition-element);
}
.profile__username {
  width: 100%;
  font-size: calc(1rem + 1vw);
  display: block;
  color: grey;
  text-align: center;
  margin-top: 12px;
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
// Inline version
.profile--inline {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.profile--inline .profile__img {
  width: 35px;
  height: 35px;
  min-width: 35px;
  min-height: 35px;
  margin-right: 10px;
  border: 1px solid red;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  transition: ease all var(--time-transition-element);
}
</style>
