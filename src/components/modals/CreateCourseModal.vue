<script setup lang="ts">
import { ref } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

interface Props {
  isOpen: boolean;
}

interface Emits {
  (e: "close"): void;
  (e: "create", course: any): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const title = ref("");
const description = ref("");
const price = ref(0);
const category = ref("development");
const level = ref("beginner");
const image = ref("");

const categories = [
  { id: "development", name: "Development" },
  { id: "business", name: "Business" },
  { id: "design", name: "Design" },
  { id: "marketing", name: "Marketing" },
];

const levels = [
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
];

const handleSubmit = () => {
  emit("create", {
    id: Date.now(),
    title: title.value,
    description: description.value,
    price: price.value,
    category: category.value,
    level: level.value,
    image:
      image.value ||
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    instructor: "John Doe", // This would come from auth user
    rating: 0,
    reviews: 0,
    enrolled: 0,
    featured: false,
  });
  resetForm();
};

const resetForm = () => {
  title.value = "";
  description.value = "";
  price.value = 0;
  category.value = "development";
  level.value = "beginner";
  image.value = "";
};
</script>

<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 z-50 overflow-y-auto no-scrollbar">
    <div class="flex items-center justify-center min-h-screen p-4">
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black opacity-30"
        @click="emit('close')"></div>

      <!-- Modal -->
      <div class="relative w-full max-w-2xl p-6 bg-white rounded-lg shadow-xl">
        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-semibold text-gray-900">
            Create New Course
          </h2>
          <button
            @click="emit('close')"
            class="p-1 rounded-full hover:bg-gray-100">
            <XMarkIcon class="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700"
              >Course Title</label
            >
            <input
              id="title"
              v-model="title"
              type="text"
              required
              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter course title" />
          </div>

          <div>
            <label
              for="description"
              class="block text-sm font-medium text-gray-700"
              >Description</label
            >
            <textarea
              id="description"
              v-model="description"
              rows="3"
              required
              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter course description"></textarea>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                for="category"
                class="block text-sm font-medium text-gray-700"
                >Category</label
              >
              <select
                id="category"
                v-model="category"
                class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                  {{ cat.name }}
                </option>
              </select>
            </div>

            <div>
              <label for="level" class="block text-sm font-medium text-gray-700"
                >Level</label
              >
              <select
                id="level"
                v-model="level"
                class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option v-for="lvl in levels" :key="lvl.id" :value="lvl.id">
                  {{ lvl.name }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label for="price" class="block text-sm font-medium text-gray-700"
              >Price ($)</label
            >
            <input
              id="price"
              v-model="price"
              type="number"
              min="0"
              step="0.01"
              required
              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>

          <div>
            <label for="image" class="block text-sm font-medium text-gray-700"
              >Cover Image URL</label
            >
            <input
              id="image"
              v-model="image"
              type="url"
              class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="https://example.com/image.jpg" />
          </div>

          <div class="flex justify-end mt-6 space-x-3">
            <button type="button" @click="emit('close')" class="btn-secondary">
              Cancel
            </button>
            <button type="submit" class="btn-primary">Create Course</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.no-scrollbar {
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.no-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and newer Edge */
}
</style>
