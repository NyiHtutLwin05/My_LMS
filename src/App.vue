<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
import Sidebar from './components/layout/Sidebar.vue'
</script>

<template>
  <div class="min-h-screen bg-neutral-light">
    <Navbar />
    <div class="flex h-[calc(100vh-4rem)]">
      <Sidebar />
      <main class="flex-1 p-6 overflow-auto">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>