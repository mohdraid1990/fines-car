<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1136px;
  margin: auto;
}

a {
  text-decoration: none;
}

.page-enter-active, .page-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.page-enter-from, .page-leave-to {
  transform: translateY(30px) rotate(10deg);
  opacity: 0;
}
</style>
