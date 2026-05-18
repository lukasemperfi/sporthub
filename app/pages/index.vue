<script setup lang="ts">
const inputValue = ref("");
const password = ref("");
const textarea = ref("");
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
    <UiInputTextarea
      v-model="textarea"
      placeholder="Description"
      label="Description"
      error="some description error"
    />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
