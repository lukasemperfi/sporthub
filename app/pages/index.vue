<script setup lang="ts"></script>

<template>
  <div class="home-page">
    home-page

    <UiIcon name="check" />
    <UiButton variant="outline"
      >outline
      <template #right-icon>
        <UiIcon name="arrow-store" /> </template
    ></UiButton>

    <UiButton variant="solid"
      >solid

      <template #left-icon>
        <UiIcon name="plus" />
      </template>
    </UiButton>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
}
</style>
