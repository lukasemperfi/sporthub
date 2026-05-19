<script setup lang="ts">
import { useForm, useField } from "vee-validate";

defineProps<{
  userRole: "creator" | "viewer";
}>();

const emit = defineEmits(["go-to-login", "submit"]);

const { handleSubmit, errors } = useForm({
  validationSchema: signUpSchema,
});

const { value: firstName } = useField<string>("firstName");
const { value: lastName } = useField<string>("lastName");
const { value: email } = useField<string>("email");
const { value: password } = useField<string>("password");

const onSubmit = handleSubmit(async (values, actions) => {
  emit("submit", { values, actions });
});
</script>

<template>
  <div class="auth-form">
    <h1 class="auth-form__title">Sign up</h1>
    <div class="auth-form__fields">
      <UiInput
        v-model="firstName"
        placeholder="Your First Name"
        :error="errors.firstName"
        label="First name"
      />
      <UiInput
        v-model="lastName"
        placeholder=" Your Last Name"
        :error="errors.lastName"
        label="Last name"
      />

      <UiInput
        v-model="email"
        placeholder=" Your email"
        :error="errors.email"
        label="Email"
      />
      <UiInputPassword
        v-model="password"
        placeholder=" Your password"
        :error="errors.password"
        label="Password"
      />
    </div>

    <UiButton class="auth-form__submit" @click="onSubmit"> Sign up </UiButton>

    <div class="auth-form__footer">
      Already have an account?
      <NuxtLink :to="`/auth/${userRole}/signin`" class="auth-form__link_auth"
        >Sign in</NuxtLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./styles.scss";
</style>
