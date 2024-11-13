<template>
  <Navbar />
  <div class="container-fluid my-5">
    <router-view />
  </div>
  <MediosPago />
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import MediosPago from '@/components/MediosPago.vue';
import Footer from '@/components/Footer.vue';
</script>

