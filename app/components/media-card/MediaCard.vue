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
  <div class="media-card" :style="height ? { height: `${height}px` } : {}">
    <img :src="imageUrl" :alt="text" class="media-card__image" />

    <div class="media-card__content">
      <p class="media-card__text">{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.media-card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
