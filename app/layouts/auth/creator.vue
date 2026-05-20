<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const { width: windowWidth } = useWindowSize();

/** Ширина, с которой слайдеры включаются (синхронно с media в layout). */
const SLIDER_MIN_WIDTH = 1440;

const isLeftSliderEnabled = computed(
  () => windowWidth.value >= SLIDER_MIN_WIDTH,
);
const isRightSliderEnabled = computed(
  () => windowWidth.value >= SLIDER_MIN_WIDTH,
);
</script>
<template>
  <div class="creator-layout">
    <div class="app-container">
      <LayoutAuthSectionLayout>
        <template #left>
          <TrainerCarousel
            :left-enabled="isLeftSliderEnabled"
            :right-enabled="isRightSliderEnabled"
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

  @media (max-width: 1439px) {
    padding-left: 0;
  }

  :deep(.section-layout) {
    .section-layout__left {
      display: flex;
      justify-content: center;
      min-width: 0;

      @media (max-width: 1439px) {
        display: none;
      }
    }
    .right {
      max-height: 800px;
      align-self: center;
      height: 100%;

      @media (max-width: 767px) {
        max-height: 100%;
      }
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
