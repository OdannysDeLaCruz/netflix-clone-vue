<template>
  <ul class="dropdown-menu">
    <li class="dropdown-menu__item">
      <div class="dropdown-account-button">
        <img src="/assets/images/profile2.png" class="dropdown-account__image" alt="Perfil de usuario">
      </div>
      <ul class="dropdown-menu__list">
        <navigation-item>
          <n-card-profile
            v-for="profile in getProfileList"
            :key="profile.id"
            :profile="profile"
            display="inline"
            @requiredAuthPin="toggleSectionAuthPin"
            @showMainView="showMainView"
            ></n-card-profile>
        </navigation-item>
      </ul>
    </li>
  </ul>
</template>
<script>
import NavigationItem from '@/components/Navigation/NavigationItem'
import NCardProfile from '@/components/NCardProfile'
// import NavigationLink from '@/components/Navigation/NavigationLink'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NavigationDropdown',
  props: {
    items: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    NavigationItem,
    NCardProfile
  },
  computed: {
    ...mapGetters([
      'getProfileList'
    ])
  },
  methods: {
    ...mapMutations('LoginProfilePin', [
      'setProfileSelectedId',
      'loginProfile'
    ]),
    toggleSectionAuthPin (profile = null) {
      console.log(this.$listeners)
      // this.$emit('requiredAuthPin', profile)
      // if (profile) {
      //   this.setProfileSelectedId(profile)
      // }
      // this.sectionAuthPin = !this.sectionAuthPin
    },
    showMainView () {
      this.mainView = true
      // loguear al perfil en store
      this.loginProfile()
    }
  }
}
</script>
<style lang="scss" scoped>
.dropdown-menu {
  --size-account-button: 4.0rem;
  position: relative;
  margin: 0;
  list-style: none;
  border: 1px solid red;
  .dropdown-menu__item {
    .dropdown-account-button {
      border: 1px solid red;
      width: var(--size-account-button);
      height: var(--size-account-button);
      overflow: hidden;
      border-radius: 7px;
      background: #fff;
      .dropdown-account__image {
        width: 100%;
        height: 100%;
      }
    }
    .dropdown-menu__list {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      right: 0px;
      top: calc(var(--size-account-button) + 20px);
      display: block;
      min-width: 150px;
      padding: 2em;
      background: #000;
      border: 1px solid #ffffff;
      transition: all .3s ease-in-out ;
    }
    .dropdown-menu__list:after {
      --border-width: 7px;
      content: "";
      position: absolute;
      top: -16px;
      right: calc((var(--size-account-button) / 2) - var(--border-width));
      border-width: var(--border-width);
      border-style: solid;
      border-color: transparent transparent #fff;
    }
    &:hover {
      background: green;
      .dropdown-account-button {
        color: #F9F8FD;
      }
      .dropdown-menu__list {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}

@keyframes slide-in {
  0% {
    top: -50px;
  }
  40% {
    top: 20px;
  }
  70% {
    top: 10px;
  }
  100% {
    top: 15px;
  }
}
</style>
