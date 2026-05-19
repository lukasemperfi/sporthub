<script setup lang="ts">
defineProps<{
  userRole: "creator" | "viewer";
}>();
const emit = defineEmits(["submit"]);

const { handleSubmit, errors } = useForm({
  validationSchema: signInSchema,
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
          :to="`/auth/${userRole}/resetpassword`"
        >
          Forgot password?
        </NuxtLink>
      </div>
    </div>

    <UiButton class="auth-form__submit" @click="onSubmit"> Sign in </UiButton>

    <div class="auth-form__footer">
      Don’t have an account?
      <NuxtLink :to="`/auth/${userRole}/signup`" class="auth-form__link_auth"
        >Sign up</NuxtLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./styles.scss";
</style>
