<script setup lang="ts">
import { ref } from "vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { StarIcon } from "@heroicons/vue/24/solid";
import CreateCourseModal from "../components/modals/CreateCourseModal.vue";

const searchQuery = ref("");
const selectedCategory = ref("all");
const selectedLevel = ref("all");
const selectedPrice = ref("all");
const isCreateModalOpen = ref(false);

const categories = [
  { id: "all", name: "All Categories" },
  { id: "development", name: "Development" },
  { id: "business", name: "Business" },
  { id: "design", name: "Design" },
  { id: "marketing", name: "Marketing" },
];

const levels = [
  { id: "all", name: "All Levels" },
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
];

const prices = [
  { id: "all", name: "All Prices" },
  { id: "free", name: "Free" },
  { id: "paid", name: "Paid" },
];

const courses = ref([
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Smith",
    rating: 4.8,
    reviews: 1234,
    price: 99.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    level: "Beginner",
    category: "Development",
    enrolled: 5678,
    featured: true,
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Johnson",
    rating: 4.9,
    reviews: 856,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    level: "Intermediate",
    category: "Design",
    enrolled: 3421,
    featured: true,
  },
]);

const handleCreateCourse = (newCourse: any) => {
  courses.value.unshift(newCourse);
  isCreateModalOpen.value = false;
};
</script>

<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold text-gray-900">Explore Courses</h1>
      <button class="btn-primary" @click="isCreateModalOpen = true">
        Create Course
      </button>
    </div>

    <!-- Search and Filters -->
    <div class="p-4 bg-white rounded-lg shadow-md">
      <div class="flex flex-col gap-4 md:flex-row">
        <!-- Search Bar -->
        <div class="relative flex-1">
          <MagnifyingGlassIcon
            class="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search courses..."
            class="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
        </div>

        <!-- Filters -->
        <div class="flex gap-4">
          <select
            v-model="selectedCategory"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id">
              {{ category.name }}
            </option>
          </select>

          <select
            v-model="selectedLevel"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
            <option v-for="level in levels" :key="level.id" :value="level.id">
              {{ level.name }}
            </option>
          </select>

          <select
            v-model="selectedPrice"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
            <option v-for="price in prices" :key="price.id" :value="price.id">
              {{ price.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Course Grid -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="course in courses"
        :key="course.id"
        class="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md group hover:shadow-xl">
        <!-- Course Image -->
        <div class="relative h-48 overflow-hidden">
          <img
            :src="course.image"
            :alt="course.title"
            class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute top-2 right-2">
            <span
              v-if="course.featured"
              class="px-3 py-1 text-sm text-white rounded-full bg-accent-purple">
              Featured
            </span>
          </div>
        </div>

        <!-- Course Info -->
        <div class="p-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-primary-light">{{
              course.category
            }}</span>
            <span class="text-sm text-gray-500">{{ course.level }}</span>
          </div>

          <h3 class="mb-2 text-lg font-semibold line-clamp-2">
            {{ course.title }}
          </h3>

          <p class="mb-2 text-sm text-gray-500">by {{ course.instructor }}</p>

          <div class="flex items-center mb-3">
            <div class="flex items-center">
              <StarIcon
                v-for="i in 5"
                :key="i"
                class="w-4 h-4"
                :class="
                  i <= course.rating ? 'text-yellow-400' : 'text-gray-300'
                " />
            </div>
            <span class="ml-2 text-sm text-gray-600"
              >{{ course.rating }} ({{ course.reviews }})</span
            >
          </div>

          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-primary"
              >${{ course.price }}</span
            >
            <button class="text-sm btn-primary">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Course Modal -->
    <CreateCourseModal
      :is-open="isCreateModalOpen"
      @close="isCreateModalOpen = false"
      @create="handleCreateCourse" />
  </div>
</template>
