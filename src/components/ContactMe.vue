<template>
  <div id="contact-me">
    <h2 class="text-center">
      The way to reach me is here!
    </h2>
    <div class="social-media">
      <h3>
        Social Way
      </h3>
      <div class="d-flex flex-column">
        <a href="">LinkedIn</a>
        <a href="">FaceBook</a>
        <a href="">GMail</a>
      </div>
    </div>
    <div class="messengers">
      <h3>
        Messengers
      </h3>
      <div class="d-flex flex-column">
        <a href="">Telegram</a>
        <a href="">Viber</a>
        <a href="">Skype</a>
      </div>
    </div>
    <div class="old-school-phone">
      <h3>
        Are you old school non-introvert?
      </h3>
      <div class="d-flex flex-column">
        <a href="">Call me!</a>
        <p>+380-0222-777</p>
      </div>
    </div>
    <hr>
    <GMapMap
        :center="{ lat: 50.4501, lng: 30.5234 }"
        :zoom="10"
        map-type-id="terrain"
        style="width: 100%; height: 20rem"
        :options="{
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true
      }"
    />

  </div>
</template>
<script>
export default {
  name: 'ContactMe',
  props: {
  },
  data() {
    return {
      };
  },
  methods: {
  },
}
</script>

<style>

</style>