<template>
  <TopBanner />
  <MainBio />
  <ProjectsList />
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
