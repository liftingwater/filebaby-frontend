<script setup lang="ts">
</script>

<template>
    <div class="min-h-screen bg-gray-100">
    <nav class="p-4 bg-white shadow flex gap-4">
      <router-link to="/" class="text-blue-600 hover:underline">Home</router-link>
      <router-link to="/upload" class="text-blue-600 hover:underline">Upload</router-link>
      <router-link to="/files" class="text-blue-600 hover:underline">Files</router-link>
    </nav>
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
