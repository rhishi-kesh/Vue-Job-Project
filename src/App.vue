<template>
  <Nav />
  <RouterView></RouterView>
</template>

<script setup>
import Nav from './component/nav.vue';
import { RouterView } from 'vue-router';
</script>