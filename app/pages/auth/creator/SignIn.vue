<script setup lang="ts">
import { type SubmissionContext, type GenericObject } from "vee-validate";

definePageMeta({
  layout: "auth-creator",
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
  <AuthSignInForm @submit="handleSignIn" user-role="creator" />
  <UiLoadingOverlay v-if="isLoading" />
</template>
<style lang="scss" scoped></style>
