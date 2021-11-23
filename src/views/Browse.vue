<template>
  <section class="browse-page">
    <n-header></n-header>
    <h1 class="main__title">¿Quién está viendo ahora?</h1>
    <section class="main__profiles">
      <ul class="main__profiles__list">
        <n-card-profile
        v-for="profile in profileList"
        :key="profile.id"
        :image="profile.image" :name="profile.name"></n-card-profile>
      </ul>
      <button class="main__profiles_button_admin">administrar perfiles</button>
    </section>
  </section>
</template>
<script>
import NHeader from '@/components/NHeader'
import NCardProfile from '@/components/NCardProfile'
export default {
  name: 'BrowsePage',
  components: {
    NHeader, NCardProfile
  },
  data: function () {
    return {
      profileList: [
        { id: 1, name: 'Lily', image: '/assets/images/profile1.png' },
        { id: 2, name: 'Odannys', image: '/assets/images/profile2.png' },
        { id: 3, name: 'Carlos', image: '/assets/images/profile3.png' },
        { id: 4, name: 'Jose', image: '/assets/images/profile4.png' }
      ]
    }
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
.main__title {
  color: #fff;
  font-size: calc(2.5rem);
  margin: 5.0rem 0 2.0rem;
  font-weight: 400;
  text-align: center;
  transition: ease all var(--time-transition-element);
}
.main__profiles {
  max-width: var(--main-profiles-width);
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.main__profiles__list {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.main__profiles_button_admin {
  background: none;
  border: 1px solid grey;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 300;
  padding: 5px 20px;
  color: grey;
  margin: 20px auto;
}
.main__profiles_button_admin:hover {
  color: white;
  border-color: white;
}
</style>
