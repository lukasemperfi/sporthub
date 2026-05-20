<script setup lang="ts">
interface Props {
  imageUrl: string;
  text: string;
  width?: number;
  height?: number;
}
defineProps<Props>();
</script>

<template>
  <div
    class="media-card"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <div class="media-card__player player">
      <button class="player__play-button">
        <UiIcon name="play" class="player__play-button-icon" />
      </button>
      <div class="player__progress-bar">progress bar</div>
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

  // &__container {
  //   container-type: inline-size;
  // }

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

      @container (height <= 118px) {
        width: 23px;
        height: 18px;
        border-radius: 5px;

        .player__play-button-icon {
          width: 7px;
          height: 8px;
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
