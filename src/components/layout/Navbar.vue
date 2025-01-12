<script setup lang="ts">
import { ref } from "vue";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

const searchQuery = ref("");
</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex items-center flex-shrink-0">
            <!-- <h1 class="text-xl font-bold text-primary">LMS Platform</h1> -->
          </div>
          <!-- <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              to="/"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-primary hover:text-primary"
            >
              Dashboard
            </router-link>
            <router-link
              to="/courses"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-primary hover:text-primary"
            >
              Courses
            </router-link>
          </div> -->
        </div>
        <div class="flex items-center">
          <div
            class="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MagnifyingGlassIcon
                    class="w-5 h-5 text-gray-400"
                    aria-hidden="true" />
                </div>
                <input
                  id="search"
                  v-model="searchQuery"
                  class="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Search"
                  type="search" />
              </div>
            </div>
          </div>
          <button
            type="button"
            class="p-1 ml-3 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            <span class="sr-only">View notifications</span>
            <BellIcon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
