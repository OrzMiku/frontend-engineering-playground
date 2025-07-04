<script setup lang="ts">
const { navItems } = useNavigation();
</script>

<template>
  <header class="bg-white dark:bg-gray-800">
    <!-- Navigation Bar -->
    <nav class="px-4 py-2 flex items-center justify-between container mx-auto">
      <div class="text-xl font-bold text-gray-900 dark:text-gray-50">
        {{ $config.public.sitename }}
      </div>
      <ul class="flex space-x-4">
        <li v-for="item in navItems" :key="item.name">
          <NuxtLink
            :to="item.path"
            class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
