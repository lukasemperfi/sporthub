<script setup lang="ts">
const { src = null } = defineProps<{
  src?: string | null;
}>();
</script>

<template>
  <div class="placeholder-rect">
    <div class="placeholder-rect__hero">
      <img
        v-if="src"
        :src="src"
        alt="Cover preview"
        class="placeholder-rect__img"
      />
      <UiIcon v-else name="photo" class="placeholder-rect__icon" />
    </div>

    <div class="placeholder-rect__bar placeholder-rect__bar_main"></div>
    <div class="placeholder-rect__footer">
      <div class="placeholder-rect__bar placeholder-rect__bar_sub"></div>
      <div class="placeholder-rect__bar placeholder-rect__bar_sub"></div>
      <div class="placeholder-rect__bar placeholder-rect__bar_sub"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.placeholder-rect {
  width: 120px;
  height: 120px;
  background: #222222;
  border-radius: 12px;
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &__hero {
    background: var(--light);
    border-radius: 8px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__icon {
    width: 32px;
    height: 32px;

    :deep(path) {
      fill: var(--dark);
    }
  }

  &__bar {
    background: #111111;
    border-radius: 2px;

    &_main {
      height: 8px;
      width: 100%;
      margin-bottom: 5px;
    }

    &_sub {
      height: 19px;
      flex: 1;
    }
  }

  &__footer {
    display: flex;
    gap: 5px;
    height: 19px;
    width: 100%;
  }
}
</style>
