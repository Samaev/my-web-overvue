<template>
  <div class="background-container">
    <div class="container p-5 top-banner">
      <div class="d-flex flex-column align-items-center">
        <h1>Welcome to My WEB Universe</h1>
        <div class="d-flex flex-row-reverse">
          <p>
            My name is Andrey Samaev. I'm Web Developer with huge Laravel Experience as well
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
        <a class="btn btn-primary" href="#">to The TOP</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBanner',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.top-banner {
  height: 100vh;
  color:white;
}
.up-button{
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
