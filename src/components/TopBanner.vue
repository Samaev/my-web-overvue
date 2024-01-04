<template>
    <div class="p-5 top-banner" id="top-banner">
      <div class="row">
        <div class="img-container col-4">
          <img class="main-photo" src="../../public/photos/20200731_172025.jpg" alt="My photo">
        </div>
        <div class="d-flex flex-column align-items-center col-8">
          <h1>Welcome to My WEB Universe</h1>
          <div class="d-flex flex-row-reverse">
            <p>
              {{ typingText }}
            </p>
          </div>
        </div>
        <div class="skill-container">
          <transition-group name="fade" tag="div">
            <div v-for="(skill, index) in visibleSkills" :key="index" :style="getSkillStyle(index)" class="skill-box">
              {{ skill }}
            </div>
          </transition-group>
        </div>
      </div>
      <div class="up-button">
        <a class="btn btn-primary" href="#main-bio">MainBio</a>
        <a class="btn btn-primary" href="#projects-list">ProjectsList</a>
        <a class="btn btn-primary" href="#">to The TOP</a>
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
      originalText: "My name is Andrey Samaev. I'm Web Developer with strong Laravel Experience as well. Experienced English-speaking Web Developer with 4+ years of comercial experience, specializing in Web Development. Skilled in direct client contact to deliver exactly what they want. Ready to take on new challenges! Let's create something amazing together!",
      typingText: "",
      skills: [
        'JavaScript', 'Vue.js', 'PHP/Laravel', 'React',
        'HTML5', 'TypeScript', 'CSS', 'VUEX',
        'SASS', 'Bootstrap', 'Redux', 'Git',
        'Clean Code', 'JSON', 'Hubspot', 'REST/API',
      ],
      visibleSkills: [],
      maxVisibleSkills: 8,
      animationInterval: null,
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
    startSkillAnimation() {
      let index = 0;
      this.animationInterval = setInterval(() => {
        if (index < this.skills.length) {
          this.visibleSkills.push(this.skills[index]);
          index++;
        } else {
          clearInterval(this.animationInterval);
        }
      }, 3000); // Adjust the interval as needed
    },
    getSkillStyle(index) {
      const isVisible = this.visibleSkills.includes(this.skills[index]);
      const top = `${Math.random() * 160}px`; // Adjust the range as needed
      const left = `${Math.random() * 60}vw`; // Adjust the range as needed

      return {
        position: 'absolute',
        top,
        left,
        transform: isVisible ? 'translate(0, 0)' : 'translate(-100%, -100%)',
        transition: 'transform 1s ease', // Adjust the transition duration as needed
      };
    },
  },
  created() {
      this.startSkillAnimation();
  },
  mounted() {
    this.simulateTyping();
  },
  beforeUnmount() {
    clearInterval(this.animationInterval);
  },
}
</script>

<style>

.up-button{
  display: flex;
  flex-direction: column;
  gap:10px;
  position: fixed;
  bottom: 50px;
  right: 50px;
}

.img-container {
  height: 240px;
  position: relative;
}
.main-photo {
  width:100%;
  border-radius: 50%;
  position: sticky;
  box-shadow: inset 0 22px 10px rgba(0, 55, 55, 0.5), 0 14px 18px rgba(255, 255, 255, 0.3); /* Inner shadow + outer shadow */
}
.skill-container {
  position: relative;
  width: 600px;
  height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.skill-box {
  position: absolute;
  padding: 8px;
  background: #fff;
  color:black;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 2s ease; /* Adjust the transition duration as needed */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 1;
}

</style>
