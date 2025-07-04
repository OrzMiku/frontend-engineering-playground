<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1 container mx-auto">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
