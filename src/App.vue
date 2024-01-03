<template>
  <TopBanner />
  <MainBio />
  <ProjectsList />
  <router-link to="/">Home</router-link>
  <router-link to="/top-banner">TopBanner 1</router-link>
  <router-link to="/main-bio">MainBio 2</router-link>
  <router-link to="/projects-list">ProjectsList 3</router-link>

  <router-view></router-view>
</template>

<script>
import TopBanner from './components/TopBanner.vue'
import MainBio from './components/MainBio.vue'
import ProjectsList from './components/ProjectsList.vue'

export default {
  name: 'App',
  components: {
    TopBanner,
    MainBio,
    ProjectsList
  }
}
</script>

<style>
#app {
  scroll-behavior: smooth;
}
</style>
