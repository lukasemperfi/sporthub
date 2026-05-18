<script setup>
defineProps({
  src: { type: String, required: true },
  variant: { type: String, default: "circle" }, // 'circle' | 'rect'
});
</script>

<template>
  <div :class="['image-preview', `image-preview--${variant}`]">
    <img :src="src" alt="Uploaded file" class="image-preview__img" />
  </div>
</template>

<style lang="scss" scoped>
.image-preview {
  width: 120px;
  height: 120px;
  overflow: hidden;

  &--circle {
    border-radius: 50%;
  }

  &--rect {
    border-radius: 12px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
