<template>
  <div class="placeholder-rect">
    <div class="placeholder-rect__hero">
      <UiIcon name="photo" class="placeholder-rect__icon" />
    </div>
    <div class="placeholder-rect__bar placeholder-rect__bar--main"></div>
    <div class="placeholder-rect__footer">
      <div class="placeholder-rect__bar placeholder-rect__bar--sub"></div>
      <div class="placeholder-rect__bar placeholder-rect__bar--sub"></div>
      <div class="placeholder-rect__bar placeholder-rect__bar--sub"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.placeholder-rect {
  width: 120px;
  height: 120px;
  background: #222222; // #222222 из фигмы
  border-radius: 12px;
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &__hero {
    background: #ad7955; // light
    border-radius: 8px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
  }

  &__icon {
    width: 32px;
    height: 32px;
    color: #653012; // dark
  }

  &__bar {
    background: #111111;
    border-radius: 2px;

    &--main {
      height: 8px;
      width: 100%;
      margin-bottom: 5px;
    }

    &--sub {
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
