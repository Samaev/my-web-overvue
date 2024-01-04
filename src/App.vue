<template>
  <div class="container">
    <TopBanner />
    <MainBio />
    <RelevantExperience />
    <ProjectsList />
    <ContactMe />
    <MapComponent />
  </div>
</template>

<script>
import TopBanner from './components/TopBanner.vue'
import MainBio from './components/MainBio.vue'
import ProjectsList from './components/ProjectsList.vue'
import RelevantExperience from './components/RelevantExperience.vue'
import ContactMe from './components/ContactMe.vue';

export default {
  name: 'App',
  components: {
    TopBanner,
    MainBio,
    ProjectsList,
    RelevantExperience,
    ContactMe,
  }
}
</script>

<style>
#app {
  scroll-behavior: smooth;

}
html, body {
  margin:0;
  padding:0;
}
#top-banner, #main-bio, #projects-list, #relevant-experience, #contact-me {
  height: 100vh;
  background: linear-gradient(135deg, #f9fbff 5.03%, #e3eeff 38.64%, #f9fbff 80.89%), #fff;
  border-radius:15px;
  margin: 25px auto;
  //background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
}
</style>
