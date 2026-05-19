<script setup lang="ts">
import { type SubmissionContext, type GenericObject } from "vee-validate";

definePageMeta({
  layout: "auth-creator",
});

const onSubmit: (
  values: GenericObject,
  actions: SubmissionContext<GenericObject>,
) => void = (values, actions) => {
  console.log(values, actions);
};
</script>
<template>
  <AuthSignInForm @submit="onSubmit" user-type="creator" />
</template>
<style lang="scss" scoped>
.sign-in {
}
</style>
