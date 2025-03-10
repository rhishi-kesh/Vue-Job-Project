<template>
    <Hero></Hero>
    <HomeCards></HomeCards>
    <JobListings :limit="3" showButton="true"></JobListings>
</template>

<script setup>
import Hero from '../component/hero.vue'
import HomeCards from '../component/homeCards.vue'
import JobListings from '../component/jobListings.vue'

</script>