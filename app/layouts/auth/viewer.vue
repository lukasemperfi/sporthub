<script setup lang="ts"></script>
<template>
  <div class="viewer-layout">
    <div class="app-container">
      <LayoutAuthSectionLayout>
        <template #left>
          <MediaMasonry />
        </template>
        <template #right>
          <slot />
        </template>
      </LayoutAuthSectionLayout>
    </div>
    <img src="/ellipse.png" alt="viewer-bg" class="bg bg_1" />
    <img src="/ellipse-2.png" alt="viewer-bg" class="bg bg_2" />
    <img src="/ellipse-3.png" alt="viewer-bg" class="bg bg_3" />
  </div>
</template>
<style lang="scss" scoped>
.viewer-layout {
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;

  :deep(.app-container) {
    @media (max-width: 767px) {
      height: 100%;
    }
  }

  :deep(.section-layout) {
    .section-layout__wrapper {
      height: 100vh;
      min-height: auto;
      overflow: auto;
      max-height: 900px;

      @media (max-width: 767px) {
        max-height: 100vh;
      }
    }
    .section-layout__left {
      padding-left: 33px;
      overflow: hidden;
    }
  }
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
