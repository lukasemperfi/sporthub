<script setup lang="ts">
import { type SubmissionContext, type GenericObject } from "vee-validate";
definePageMeta({
  layout: "auth-creator",
});

const onFirstStepSubmit: (
  values: GenericObject,
  actions: SubmissionContext<GenericObject>,
) => void = (values, actions) => {
  console.log(values, actions);
};
</script>
<template>
  <AuthSignUpForm @submit="onFirstStepSubmit" user-role="creator" />
</template>
<style lang="scss" scoped></style>
