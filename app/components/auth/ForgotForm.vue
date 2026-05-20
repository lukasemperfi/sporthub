<script setup lang="ts">
import { useForm, useField } from "vee-validate";

defineProps<{
  userRole: "creator" | "viewer";
}>();

const emit = defineEmits(["go-to-login", "submit"]);

const { handleSubmit, errors } = useForm({
  validationSchema: forgotSchema,
});

const { value: email } = useField<string>("email");
const showSuccessInfo = ref(false);

const handleSend = handleSubmit((values, actions) => {
  emit("submit", { values, actions });
  showSuccessInfo.value = true;
});
</script>

<template>
  <div class="auth-form-wrapper">
    <div v-if="!showSuccessInfo" class="auth-form">
      <div class="auth-form__header">
        <h1 class="auth-form__title">Forgot your password?</h1>
        <p class="auth-form__text">
          Enter your email address and we'll send you instructions on how to
          reset your password
        </p>
      </div>

      <div class="auth-form__fields">
        <UiInput
          v-model="email"
          placeholder="Your email"
          :error="errors.email"
          label="Email"
        />
      </div>
      <UiButton class="auth-form__submit" @click="handleSend">
        Send Email
      </UiButton>
    </div>
    <div v-else class="auth-form">
      <h1 class="auth-form__title">Please check your inbox</h1>
      <p class="auth-form__text">
        Check your email name@gmail.com for instructions on how to reset your
        password. If it doesn’t appear within a few minutes, check your spam
        folder.
      </p>
      <div class="auth-form__footer">
        Didn't receive the email?
        <NuxtLink :to="`/auth/${userRole}/signup`" class="auth-form__link_auth"
          >Go to Support</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./styles.scss";

.auth-form {
  &__text {
    margin-top: 16px;
    max-width: 420px;
    align-self: center;
  }
}
</style>
