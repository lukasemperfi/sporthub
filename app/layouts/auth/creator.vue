<script setup lang="ts"></script>
<template>
  <div class="creator-layout">
    <div class="app-container">
      <LayoutAuthSectionLayout>
        <template #left>
          <TrainerCard
            image-url="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600"
            name="Devon Lane"
            role="Fitness trainer"
          />
        </template>
        <template #right>
          <slot />
        </template>
      </LayoutAuthSectionLayout>
    </div>
    <img src="/ellipse.png" alt="creator-bg" class="bg bg_1" />
    <img src="/ellipse-2.png" alt="creator-bg" class="bg bg_2" />
    <img src="/ellipse-3.png" alt="creator-bg" class="bg bg_3" />
  </div>
</template>
<style lang="scss" scoped>
.creator-layout {
  position: relative;
  overflow: hidden;
  padding-left: 50px;
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
  &_3 {
    top: -49vw;
    right: -30vw;
  }
}
</style>
