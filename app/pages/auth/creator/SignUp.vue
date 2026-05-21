<script setup lang="ts">
import { type SubmissionContext, type GenericObject } from "vee-validate";
definePageMeta({
  layout: "auth-creator",
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
      role: "creator",
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
  <div class="creator-sign-up-page">
    <AuthSignUpForm @submit="handleSignUp" user-role="creator" />
    <UiLoadingOverlay v-if="isLoading" />
  </div>
</template>
<style lang="scss" scoped>
.creator-sign-up-page {
  position: relative;
  width: 100%;
}
</style>
