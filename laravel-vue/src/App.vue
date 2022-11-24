<template>
  <div id="app">
    <NavBar />
    <main class="container mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700");

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
