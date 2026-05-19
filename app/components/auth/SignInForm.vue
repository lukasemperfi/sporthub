<script setup lang="ts">
defineProps<{
  userType: "creator" | "viewer";
}>();
const emit = defineEmits(["submit"]);

const { handleSubmit, errors } = useForm({
  validationSchema: loginSchema,
});

const { value: email } = useField<string>("email");
const { value: password } = useField<string>("password");

const onSubmit = handleSubmit((values, actions) => {
  emit("submit", { values, actions });
});
</script>

<template>
  <div class="auth-form">
    <h1 class="auth-form__title">Sign in</h1>
    <div class="auth-form__fields">
      <UiInput
        v-model="email"
        placeholder="Your email"
        :error="errors.email"
        label="Email"
      />

      <div class="auth-form__password-wrapper">
        <UiInputPassword
          v-model="password"
          placeholder="Your password"
          :error="errors.password"
          label="Password"
        />

        <NuxtLink
          class="auth-form__link auth-form__link--forgot"
          :to="`/auth/${userType}/forgot`"
        >
          Forgot password?
        </NuxtLink>
      </div>
    </div>

    <UiButton class="auth-form__submit" @click="onSubmit" variant="outline">
      Sign in
    </UiButton>

    <div class="auth-form__signup">
      Don’t have an account?
      <NuxtLink :to="`/auth/${userType}/signup`" class="auth-form__link_signup"
        >Sign up</NuxtLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./styles.scss";
</style>
