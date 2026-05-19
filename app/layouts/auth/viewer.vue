<script setup lang="ts"></script>
<template>
  <div class="viewer-layout">
    <UiSectionLayout>
      <template #left> left content </template>
      <template #right>
        <slot />
      </template>
    </UiSectionLayout>
  </div>
</template>
<style lang="scss" scoped></style>
