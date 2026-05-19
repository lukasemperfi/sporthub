<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
<template>
  <div class="auth-page">
    <div class="auth-page__links">
      <UiButton as="link" to="/auth/creator/signin" variant="outline">
        Creator</UiButton
      >
      <UiButton as="link" to="/auth/viewer/signin" variant="outline">
        Viewer</UiButton
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.auth-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  &__links {
    display: flex;
    gap: 20px;
  }
}
</style>
