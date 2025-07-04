<script lang="ts" setup>
const config = useRuntimeConfig();
useHead({
  titleTemplate(title) {
    return title
      ? `${title} - ${config.public.sitename}`
      : config.public.sitename;
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
