<script setup lang="ts">
import { useRoute } from "vue-router";
import {
  HomeIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";

const route = useRoute();
const navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "/" },
  { name: "Courses", icon: AcademicCapIcon, href: "/courses" },
  { name: "Messages", icon: ChatBubbleLeftRightIcon, href: "/messages" },
  { name: "Profile", icon: UserIcon, href: "/profile" },
  { name: "Settings", icon: Cog6ToothIcon, href: "/settings" },
];

const isActive = (path: string) => route.path === path;
</script>

<template>
  <aside class="w-64 h-full bg-white shadow-md">
    <div class="text-center">
      <h1 class="relative text-xl font-bold text-primary bottom-11">
        LMS Platform
      </h1>
    </div>
    <div class="h-full px-3 py-4">
      <nav class="space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          :class="[
            'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
            isActive(item.href)
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-primary hover:text-white',
          ]">
          <component :is="item.icon" class="w-6 h-6 mr-3" aria-hidden="true" />
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </aside>
</template>
