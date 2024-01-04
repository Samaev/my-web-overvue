<template>
  <div class="background-container">
    <div class="container p-5 top-banner" id="top-banner">
      <div class="d-flex flex-column align-items-center">
        <h1>Welcome to My WEB Universe</h1>
        <div class="d-flex flex-row-reverse">
          <p>
            {{ typingText }}
          </p>
        </div>
        <div class="m-auto">
          <a class="btn btn-primary" href="#main-bio">Explore Bio</a>
        </div>
        <ul>
          <li>Education</li>
          <li>Skills</li>
          <li>Experience</li>
        </ul>
      </div>
      <div class="up-button">
        <a class="btn btn-primary" href="#main-bio">MainBio</a>
        <a class="btn btn-primary" href="#projects-list">ProjectsList</a>
        <a class="btn btn-primary" href="#">to The TOP</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBanner',
  props: {
  },
  data() {
    return {
      originalText: "My name is Andrey Samaev. I'm Web Developer with huge Laravel Experience as well. Experienced English-speaking Web Developer with 4+ years of comercial experience, specializing in Web Development. Skilled in direct client contact to deliver exactly what they want. Ready to take on new challenges! Let's create something amazing together!",
      typingText: ""
      };
  },
  methods: {
    simulateTyping() {
      let index = 0;
      const typingInterval = setInterval(() => {
        this.typingText += this.originalText[index];
        index++;
        if (index === this.originalText.length) {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust the interval as needed
    },
  },
  mounted() {
    this.simulateTyping();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.top-banner {
  height: 100vh;
  color:white;
}
.up-button{
  display: flex;
  flex-direction: column;
  gap:10px;
  position: fixed;
  bottom: 50px;
  right: 50px;
}
.background-container {
  background-image: url('../../public/animated.gif');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
