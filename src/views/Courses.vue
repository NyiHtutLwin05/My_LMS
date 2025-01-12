<script setup lang="ts">
import { ref } from 'vue'
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/24/solid'
import CreateCourseModal from '../components/modals/CreateCourseModal.vue'

const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedLevel = ref('all')
const selectedPrice = ref('all')
const isCreateModalOpen = ref(false)

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'development', name: 'Development' },
  { id: 'business', name: 'Business' },
  { id: 'design', name: 'Design' },
  { id: 'marketing', name: 'Marketing' }
]

const levels = [
  { id: 'all', name: 'All Levels' },
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' }
]

const prices = [
  { id: 'all', name: 'All Prices' },
  { id: 'free', name: 'Free' },
  { id: 'paid', name: 'Paid' }
]

const courses = ref([
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'John Smith',
    rating: 4.8,
    reviews: 1234,
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    level: 'Beginner',
    category: 'Development',
    enrolled: 5678,
    featured: true
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    reviews: 856,
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    level: 'Intermediate',
    category: 'Design',
    enrolled: 3421,
    featured: true
  }
])

const handleCreateCourse = (newCourse: any) => {
  courses.value.unshift(newCourse)
  isCreateModalOpen.value = false
}
</script>

<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-900">Explore Courses</h1>
      <button class="btn-primary" @click="isCreateModalOpen = true">Create Course</button>
    </div>

    <!-- Search and Filters -->
    <div class="bg-white rounded-lg shadow-md p-4">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Search Bar -->
        <div class="flex-1 relative">
          <MagnifyingGlassIcon class="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search courses..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <!-- Filters -->
        <div class="flex gap-4">
          <select
            v-model="selectedCategory"
            class="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>

          <select
            v-model="selectedLevel"
            class="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option v-for="level in levels" :key="level.id" :value="level.id">
              {{ level.name }}
            </option>
          </select>

          <select
            v-model="selectedPrice"
            class="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option v-for="price in prices" :key="price.id" :value="price.id">
              {{ price.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Course Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="course in courses"
        :key="course.id"
        class="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
      >
        <!-- Course Image -->
        <div class="relative h-48 overflow-hidden">
          <img
            :src="course.image"
            :alt="course.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute top-2 right-2">
            <span v-if="course.featured" class="bg-accent-purple text-white px-3 py-1 rounded-full text-sm">
              Featured
            </span>
          </div>
        </div>

        <!-- Course Info -->
        <div class="p-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-primary-light">{{ course.category }}</span>
            <span class="text-sm text-gray-500">{{ course.level }}</span>
          </div>
          
          <h3 class="text-lg font-semibold mb-2 line-clamp-2">{{ course.title }}</h3>
          
          <p class="text-sm text-gray-500 mb-2">by {{ course.instructor }}</p>
          
          <div class="flex items-center mb-3">
            <div class="flex items-center">
              <StarIcon v-for="i in 5" :key="i" class="h-4 w-4" :class="i <= course.rating ? 'text-yellow-400' : 'text-gray-300'" />
            </div>
            <span class="ml-2 text-sm text-gray-600">{{ course.rating }} ({{ course.reviews }})</span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-lg font-bold text-primary">${{ course.price }}</span>
            <button class="btn-primary text-sm">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Course Modal -->
    <CreateCourseModal
      :is-open="isCreateModalOpen"
      @close="isCreateModalOpen = false"
      @create="handleCreateCourse"
    />
  </div>
</template>