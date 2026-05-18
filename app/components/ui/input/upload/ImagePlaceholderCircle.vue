<template>
  <div class="placeholder-circle">
    <UiIcon name="photo" class="placeholder-circle__icon" />
  </div>
</template>

<style lang="scss" scoped>
.placeholder-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #653012; // dark из фигмы
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    width: 48px;
    height: 48px;
    color: #ad7955; // light из фигмы
  }
}
</style>
