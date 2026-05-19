<script setup lang="ts"></script>
<template>
  <div class="section-layout">
    <div class="section-layout__wrapper">
      <div class="section-layout__left">
        <slot name="left" />
      </div>
      <div class="section-layout__right right">
        <div class="right__header">
          <div class="right__logo-wrapper">
            <img src="/images/logo.png" alt="logo" class="right__logo" />
          </div>
        </div>
        <div class="right__body">
          <slot name="right" />
        </div>
        <div class="right__footer">
          <p class="right__footer-text">
            By proceeding, you agree to our
            <NuxtLink to="#" class="right__footer-link"
              >Terms of Service</NuxtLink
            >
            and
            <NuxtLink to="#" class="right__footer-link"
              >Privacy Policy</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-layout {
  margin-inline: globalFunctions.fluidValue(-16px, -24px, 375px, 1440px);
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
    padding-block: 24px;
    padding-inline: 80px;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    &__body {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__footer {
      width: 100%;
      display: flex;
      justify-content: center;

      &-text,
      &-link {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--7);
      }

      &-link {
        text-decoration: underline;
        text-decoration-skip-ink: none;
      }
    }
  }
}
</style>
