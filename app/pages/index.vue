<script setup lang="ts">
const inputValue = ref("");
const password = ref("");
</script>

<template>
  <div class="home-page">
    home-page

    <UiInput
      v-model="inputValue"
      error="dfgdfgdf dfhfgh"
      placeholder="Description"
      label="Description"
    >
      <template #left>
        <UiIcon name="search" />
      </template>
      <template #right>
        <UiIcon name="close" />
      </template>
    </UiInput>
    <UiInputPassword v-model="password" placeholder="Password" />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding: 48px;
}
</style>
