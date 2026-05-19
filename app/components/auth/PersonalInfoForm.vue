<script setup lang="ts">
import { useForm, useField } from "vee-validate";

defineProps<{
  userRole: "creator" | "viewer";
}>();

const emit = defineEmits(["go-to-login", "submit"]);

const { handleSubmit, errors } = useForm({
  validationSchema: signUpSchema,
});

const date = ref("");
const radio = ref("none");
const avatar = ref(null);

const onSubmit = handleSubmit(async (values, actions) => {
  emit("submit", { values, actions });
});
</script>

<template>
  <div class="auth-form">
    <h1 class="auth-form__title">Sign up</h1>
    <div class="auth-form__fields">
      <UiInputUpload
        v-model="avatar"
        title="Information about adding photo"
        description="Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
      >
        <template #visual>
          <UiInputUploadImagePreview
            v-if="avatar"
            :src="avatar"
            variant="circle"
          />
          <UiInputUploadImagePlaceholderCircle v-else />
        </template>
      </UiInputUpload>

      <UiInputRadioGroup
        v-model="radio"
        label="Radio group"
        :options="[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'None', value: 'none' },
        ]"
      />
      <UiInputDate v-model="date" label="Date" />
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
