<template>
  <HomeComponent />
  <FooterComponent />
</template>

<script>
import HomeComponent from './components/HomeComponent/HomeComponent.vue';
import FooterComponent from './components/FooterComponent/FooterComponent.vue';

  export default {
    name: 'App',
    components: {
      HomeComponent,
      FooterComponent
    }
  }
</script>

<style>
</style>
