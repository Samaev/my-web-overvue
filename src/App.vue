<template>
  <div class="container">
    <TopBanner />
    <MainBio />
    <RelevantExperience />
    <ProjectsList />
    <ContactMe />
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
body {
  margin: 0;
  padding: 0;
  background-image: url('/public/photos/bg1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: Roboto, sans-serif;
}
#top-banner, #main-bio, #projects-list, #relevant-experience, #contact-me {
  background-color: rgba(43, 7, 7, 0.5);
  border-radius:1px;
  margin: 25px auto;
  box-shadow: 0px 22px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  color:oldlace;
  font-family: Roboto, sans-serif;
}
</style>
