<script setup lang="ts">
import { computed, watch, useTemplateRef } from "vue";
import { gsap } from "gsap";

interface Props {
  imageUrl: string;
  text: string;
  audioUrl: string;
  isPlaying: boolean;
  progress: number;
  width?: number;
  height?: number;
}

const { height = 0, progress = 0, isPlaying } = defineProps<Props>();

const emit = defineEmits<{
  (e: "toggle"): void;
}>();

const waveRef = useTemplateRef<HTMLDivElement>("wave-container");

const barsLarge = [
  2, 2, 6, 14, 22, 12, 2, 14, 20, 25, 8, 4, 2, 8, 14, 20, 12, 6, 4, 2, 5, 12,
  18, 10, 2, 14, 20, 25, 8, 4, 2, 8, 14, 20, 12, 6, 4, 2, 2, 2, 5, 12, 18, 10,
  2, 14, 24, 29, 8, 4, 2, 8, 14, 20, 12, 14, 20, 25, 8, 4, 2, 8, 14, 20, 2, 4,
  8, 4, 2,
];

const barsMedium = [
  2, 2, 6, 14, 22, 12, 2, 14, 20, 25, 8, 4, 2, 8, 14, 20, 12, 6, 4, 2, 5, 12, 8,
  4, 2, 8, 14, 20, 2, 4, 8, 4, 2,
];

const barsSmall = [
  2, 2, 4, 8, 13, 7, 2, 8, 12, 15, 5, 3, 2, 5, 8, 12, 7, 4, 3, 2, 3, 7, 11, 6,
  2, 8, 12, 15, 5, 3, 2, 5, 8, 12, 8, 5, 4, 2,
];

const bars = computed(() => {
  if (height <= 118) return barsSmall;
  if (height > 118 && height <= 170) return barsMedium;
  return barsLarge;
});

let tweens: gsap.core.Tween[] = [];

const startAnimation = () => {
  if (!waveRef.value) return;

  const barElements = waveRef.value.querySelectorAll(
    ".player__audio-wave__bar",
  );

  barElements.forEach((barEl) => {
    const originalHeight =
      parseFloat(window.getComputedStyle(barEl).height) || 10;

    const tween = gsap.to(barEl, {
      height: `random(${Math.max(2, originalHeight * 0.3)}, ${originalHeight * 1.8})`,
      duration: "random(0.25, 0.45)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    tweens.push(tween);
  });
};

const stopAnimation = () => {
  tweens.forEach((t) => t.kill());
  tweens = [];

  if (!waveRef.value) return;
  const barElements = waveRef.value.querySelectorAll(
    ".player__audio-wave__bar",
  );

  barElements.forEach((barEl, index) => {
    const originalHeight = bars.value[index] || 2;
    gsap.to(barEl, {
      height: `${originalHeight}px`,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};

watch(
  () => isPlaying,
  (playing) => {
    if (playing) {
      setTimeout(startAnimation, 50);
    } else {
      stopAnimation();
    }
  },
  { immediate: true },
);

watch(bars, () => {
  if (isPlaying) {
    stopAnimation();
    setTimeout(startAnimation, 50);
  }
});

const waveHeight = computed(() => {
  if (height <= 118) return 17;
  if (height > 118 && height <= 170) return 25;
  return 29;
});
</script>

<template>
  <div
    class="media-card"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <div class="media-card__player player">
      <button class="player__play-button" @click="emit('toggle')">
        <UiIcon
          :name="isPlaying ? 'pause' : 'play'"
          class="player__play-button-icon"
        />
      </button>

      <!-- <div
        class="player__audio-wave"
        :style="{
          '--wave-progress': `${progress}%`,
          height: `${waveHeight}px`,
        }"
        ref="wave-container"
      >
        <div
          v-for="(bar, index) in bars"
          :key="index"
          class="player__audio-wave__bar"
          :style="{
            height: `${bar}px`,
            maxHeight: `${waveHeight}px`,
          }"
        />
      </div> -->

      <MediaCardWave :progress="progress" :is-animated="isPlaying" />
    </div>
    <p class="media-card__text">{{ text }}</p>
    <img :src="imageUrl" :alt="text" class="media-card__image" />
  </div>
</template>

<style lang="scss" scoped>
.media-card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;

  container-type: size;

  .player {
    display: flex;
    gap: 15px;
    align-items: center;

    @container (height <= 118px) {
      gap: 9px;
    }
    @container (118px < height <= 170px) {
      gap: 13px;
    }

    &__play-button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      width: 38px;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      flex: 1 0 auto;

      @container (height <= 118px) {
        width: 23px;
        height: 18px;
        border-radius: 5px;

        .player__play-button-icon {
          width: 7px;
          height: 8px;
          color: var(--3);
        }
      }

      @container (118px < height <= 170px) {
        width: 32px;
        height: 26px;
        border-radius: 6px;
      }

      @media (hover: hover) {
        &:hover {
          background-color: rgba(0, 0, 0, 1);
        }
      }
    }

    &__play-button-icon {
      width: 13px;
      height: 13px;
    }

    &__audio-wave {
      display: flex;
      align-items: center;
      gap: 2px;
      width: 100%;
      // height: 64px;

      &__bar {
        width: 2px;
        background: var(--4);
        transition: background 0.2s ease;
      }
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    color: var(--4);
    margin-top: 8px;

    @container (height <= 118px) {
      font-size: 9px;
      margin-top: 5px;
    }

    @container (118px < height <= 170px) {
      font-size: 11px;
      margin-top: 7px;
    }
  }
}
</style>
