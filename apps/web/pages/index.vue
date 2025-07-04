<script setup lang="ts">
import { Button } from '@qqmc/components';
useHead({
  title: 'Hello World',
});
const msg = 'Hello World!';
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50 text-4xl"
  >
    <Button>{{ msg }}</Button>
  </div>
</template>
