<template>
  <button :type="type || 'button'" :disabled="disabled">
    <slot />！！！！！
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}>();
</script>
