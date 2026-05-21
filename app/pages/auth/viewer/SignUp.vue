<script setup lang="ts">
import { type SubmissionContext, type GenericObject } from "vee-validate";
definePageMeta({
  layout: "auth-viewer",
});

const authApi = useAuthApi();
const router = useRouter();
const isLoading = ref(false);

const handleSignUp: (
  values: GenericObject,
  actions: SubmissionContext<GenericObject>,
) => void = async ({ values, actions }) => {
  isLoading.value = true;
  try {
    const userInfo = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      role: "viewer",
    };

    await authApi.signUp(userInfo);

    router.push("/");
  } catch (err: any) {
    console.error(err);
    actions.setErrors({ confirmPassword: "Error during sign up" });
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div class="viewer-sign-up-page">
    <AuthSignUpForm @submit="handleSignUp" user-role="viewer" />
    <UiLoadingOverlay v-if="isLoading" />
  </div>
</template>
<style lang="scss" scoped>
.viewer-sign-up-page {
  position: relative;
  width: 100%;
}
</style>
