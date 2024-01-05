<template>
    <div class="top-banner" id="top-banner">

      <div class="row">
        <div class="img-container col-4">
          <img class="main-photo" src="../../public/photos/20200731_172025.jpg" alt="My photo">
        </div>
        <div class="d-flex flex-column align-items-center col-8">
          <h1>{{ $t('greeting') }}</h1>
          <div class="d-flex flex-row-reverse">
            <p>
              {{ typingText }}
            </p>
          </div>
        </div>

      </div>
      <div class="skill-container">
        <h4 class="skills-title">{{ $t('skillsText') }}</h4>
        <transition-group name="fade" tag="div">
          <div v-for="(skill, index) in visibleSkills" :key="index" :style="getSkillStyle(index)" class="skill-box">
            {{ skill }}
          </div>
        </transition-group>
      </div>
      <div class="up-button">
        <button @click="changeLanguage('en')">EN</button>
        <button @click="changeLanguage('ua')">UA</button>
        <a class="btn btn-primary" href="#main-bio">MainBio</a>
        <a class="btn btn-primary" href="#projects-list">ProjectsList</a>
        <a class="btn btn-primary" href="#">to The TOP</a>
      </div>
      <div class="cv-button">
        <button @click="downloadPdf"><img class="cv-icon" src="../../public/photos/cv.png" alt="My CV Download"></button>
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
      originalText: this.$t('originalText'),
      typingText: "",
      skills: [
        'JavaScript', 'Vue.js', 'PHP/Laravel', 'React',
        'HTML5', 'TypeScript', 'CSS', 'VUEX',
        'SASS', 'Bootstrap', 'Redux', 'Git',
        'Clean Code', 'JSON', 'Hubspot', 'REST/API',
        'CSS3',
      ],
      visibleSkills: [],
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
      }, 100);
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
      }, 3000);
    },
    getSkillStyle(index) {
      const isVisible = this.visibleSkills.includes(this.skills[index]);
      const top = `${Math.random() * 90}%`;
      const left = `${Math.random() * 90}%`;

      return {
        position: 'absolute',
        top,
        left,
        transform: isVisible ? 'translate(0, 0)' : 'translate(-100%, -100%)',
        transition: 'transform 1s ease',
      };
    },
    downloadPdf() {
      const pdfUrl = '../../public/assets/AndreySamaevVueLaravel.pdf';

      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'AndreySamaevVueLaravel.pdf';

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem('userLocale', locale);
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
.top-banner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
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
  width: 100%;
  height: auto;
  margin-bottom: 40px;
}

.skill-box {
  position: absolute;
  padding: 8px;
  background: #4AC6C6;
  color:black;
  border: 0px solid black;
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
.cv-button {
  position: fixed;
  top:25px;
  right:15px;
  cursor: pointer;
}
.cv-button::before {
  transition: all 2s ease;
}

.cv-icon {
  height: 50px;
  width: 50px;
  transition: all 3s ease;
}

.cv-icon:hover {
  transform: scale(1.3);
}
.cv-button:hover::before {
  content: "Download CV as PDF";
  display: block;
  position: absolute;
  top: 60px;
  left: -200px;
  background-color: #4AC6C6;
  color: #0c0c0c;
  padding: 15px 25px;
  box-shadow: 0 14px 18px rgba(0, 0, 0, 0.5);
}
.skills-title {
  margin:auto;
  text-align: center;
  font-size: 9em;
  opacity:0.3;
}

</style>
