<script setup lang="ts">
const inputValue = ref("");
const password = ref("");
const textarea = ref("");
const date = ref("");
const radio = ref("1");

const avatar = ref(null);
const cover = ref(null);
</script>

<template>
  <div class="home-page">
    home-page

    <UiInput
      v-model="inputValue"
      error="dfgdfgdf dfhfgh"
      placeholder="Description"
      label="Description"
    >
      <template #left>
        <UiIcon name="search" />
      </template>
      <template #right>
        <UiIcon name="close" />
      </template>
    </UiInput>
    <UiInputPassword v-model="password" placeholder="Password" />
    <UiInputTextarea
      v-model="textarea"
      placeholder="Description"
      label="Description"
      error="some description error"
    />
    <UiInputDate v-model="date" label="Date" />
    <UiInputRadioGroup
      v-model="radio"
      label="Radio group"
      :options="[
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'None', value: 'none' },
      ]"
    />
    <p>Selected value: {{ radio }}</p>

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

    <UiInputUpload
      v-model="cover"
      title="Information about adding cover"
      description="Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    >
      <template #visual>
        <UiInputUploadImagePlaceholderRect :src="cover" />
      </template>
    </UiInputUpload>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
