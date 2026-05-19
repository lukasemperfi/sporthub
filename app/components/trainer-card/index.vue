<script setup lang="ts">
interface Props {
  imageUrl: string;
  name: string;
  role: string;
}

defineProps<Props>();
</script>

<template>
  <div class="trainer-card">
    <div class="trainer-card__container">
      <div class="trainer-card__wrapper">
        <NuxtImg :src="imageUrl" :alt="name" class="trainer-card__background" />
        <div class="trainer-card__content">
          <h3 class="trainer-card__name">{{ name }}</h3>
          <p class="trainer-card__role">{{ role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trainer-card {
  width: 100%;
  height: 100%;
  &__container {
    container-type: inline-size;
    width: 100%;
    height: 100%;
  }

  &__wrapper {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    padding: 16px;
    display: flex;
    width: 100%;
    height: 100%;
  }

  &__background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 4px;
  }

  &__name {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    color: var(--3);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @container (width <= 220px) {
      font-size: 14px;
    }
  }

  &__role {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;

    color: var(--3);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
