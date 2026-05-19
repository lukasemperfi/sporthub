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
  <AuthForgotForm @submit="onSubmit" user-role="creator" />
</template>
<style lang="scss" scoped></style>
