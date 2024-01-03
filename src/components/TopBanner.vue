<template>
  <div class="container p-5">

    <div class="d-flex flex-column align-items-center">
      <h1>Welcome to My WEB Universe</h1>
      <div class="d-flex flex-row-reverse">
        <p>
          My name is Andrey Samaev. I'm Web Developer with huge Laravel Experience as well
        </p>
      </div>
      <div class="m-auto">
        <button class="btn btn-primary">Start</button>
      </div>
      <ul>
        <li>Education</li>
        <li>Skills</li>
        <li>Experience</li>
      </ul>
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
#app {
  height: 100vh;
}
</style>
