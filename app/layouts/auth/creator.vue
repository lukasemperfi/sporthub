<script setup lang="ts"></script>
<template>
  <div class="creator-layout app-container">
    <LayoutAuthSectionLayout>
      <template #left> left content </template>
      <template #right>
        <slot />
      </template>
    </LayoutAuthSectionLayout>

    <img src="/ellipse.png" alt="creator-bg" class="bg bg_1" />
    <img src="/ellipse-2.png" alt="creator-bg" class="bg bg_2" />
  </div>
</template>
<style lang="scss" scoped>
.creator-layout {
  position: relative;
  overflow: hidden;
}

.bg {
  position: absolute;

  z-index: -1;
  width: 100%;

  &_1 {
    top: -44vw;
    left: -3vw;
  }
  &_2 {
    bottom: -49vw;
    left: -30vw;
  }
}
</style>
