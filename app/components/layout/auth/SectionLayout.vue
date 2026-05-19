<script setup lang="ts"></script>
<template>
  <div class="section-layout">
    <div class="section-layout__wrapper">
      <div class="section-layout__left">
        <slot name="left" />
      </div>
      <div class="section-layout__right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-layout {
  &__wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    overflow: clip;
    display: grid;
    grid-template-columns: 700fr 580fr;
    column-gap: 159px;
  }
  &__left {
  }
  &__right {
    background-color: var(--10);
  }
}
</style>
