<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
<template>
  <div class="auth-page">
    <div class="auth-page__links">
      <NuxtLink to="/auth/creator/signin" class="auth-page__creator">
        <NuxtImg
          src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1900&auto=format"
          alt="logo"
          class="auth-page__creator-img auth-page__img"
        />
        <UiButton variant="outline" class="auth-page__btn"> Creator</UiButton>
      </NuxtLink>

      <NuxtLink to="/auth/viewer/signin" class="auth-page__viewer">
        <NuxtImg
          src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1900&auto=format"
          alt="logo"
          class="auth-page__viewer-img auth-page__img"
        />
        <UiButton variant="outline" class="auth-page__btn"> Viewer</UiButton>
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.auth-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &__links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;

    @media (max-width: 767px) {
      height: auto;
      max-height: 100vh;
    }
  }

  &__creator,
  &__viewer {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    @media (max-width: 767px) {
      height: auto;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  &__btn {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    color: var(--3);
    font-size: globalFunctions.fluidValue(18px, 48px, 375px, 1440px);

    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: none;
  }
}
</style>
