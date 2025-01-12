<script setup lang="ts">
import { ref } from 'vue'

const stats = ref([
  { name: 'Enrolled Courses', value: '12' },
  { name: 'Completed Courses', value: '8' },
  { name: 'In Progress', value: '4' },
  { name: 'Upcoming Tasks', value: '3' }
])
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
    
    <!-- Stats -->
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="item in stats"
        :key="item.name"
        class="bg-white overflow-hidden shadow rounded-lg"
      >
        <div class="px-4 py-5 sm:p-6">
          <dt class="text-sm font-medium text-gray-500 truncate">
            {{ item.name }}
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-primary">
            {{ item.value }}
          </dd>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white shadow rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Recent Activity
        </h3>
      </div>
      <div class="border-t border-gray-200">
        <div class="px-4 py-5 sm:px-6">
          <p class="text-gray-500">No recent activity</p>
        </div>
      </div>
    </div>
  </div>
</template>