<script setup lang="ts">
import { type SubmissionContext, type GenericObject } from "vee-validate";

definePageMeta({
  layout: "auth-viewer",
});

const onSubmit: (
  values: GenericObject,
  actions: SubmissionContext<GenericObject>,
) => void = (values, actions) => {
  console.log(values, actions);
};
</script>
<template>
  <AuthForgotForm @submit="onSubmit" user-role="viewer" />
</template>
<style lang="scss" scoped></style>
