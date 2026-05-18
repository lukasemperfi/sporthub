<template>
  <div class="upload-row">
    <div class="upload-row__visual">
      <slot name="visual" />
    </div>

    <div class="upload-row__content">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.upload-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 436px;
  height: 120px;

  &__visual {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    position: relative;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-grow: 1;
  }
}
</style>
