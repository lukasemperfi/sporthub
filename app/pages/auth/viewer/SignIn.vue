<script setup lang="ts">
import { type SubmissionContext, type GenericObject } from "vee-validate";

definePageMeta({
  layout: "auth-viewer",
});

const authApi = useAuthApi();
const router = useRouter();
const isLoading = ref(false);

const handleSignIn: (
  values: GenericObject,
  actions: SubmissionContext<GenericObject>,
) => void = async ({ values, actions }) => {
  isLoading.value = true;
  try {
    await authApi.signIn(values.email, values.password);

    router.push("/");
  } catch (err: any) {
    console.error(err);
    actions.setErrors({ password: "Uncorrect email or password" });
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div class="viewer-sign-in-page">
    <AuthSignInForm @submit="handleSignIn" user-role="viewer" />
    <UiLoadingOverlay v-if="isLoading" />
  </div>
</template>
<style lang="scss" scoped>
.viewer-sign-in-page {
  position: relative;
  width: 100%;
}
</style>
