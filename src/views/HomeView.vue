<template>
    <Nav></Nav>
    <Hero></Hero>
    <HomeCards></HomeCards>
    <JobListings :limit="3" showButton="true"></JobListings>
</template>

<script setup>
import Nav from '../component/nav.vue'
import Hero from '../component/hero.vue'
import HomeCards from '../component/homeCards.vue'
import JobListings from '../component/jobListings.vue'

</script>