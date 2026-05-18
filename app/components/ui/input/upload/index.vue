<script setup lang="ts">
import { ref } from "vue";

interface Props {
  title?: string;
  description?: string;
}

const {
  title = "Information about adding file",
  description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
} = defineProps<Props>();

const modelValue = defineModel<string | null>({ default: null });

const emit = defineEmits<{
  error: [message: string];
  change: [file: File | null];
}>();

const fileInput = ref<HTMLInputElement | null>(null);
const fileName = ref<string>("File_name.jpeg");
const errorMessage = ref<string>("");

const triggerUpload = (): void => {
  fileInput.value?.click();
};

const handleFileChange = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file) return;

  fileName.value = file.name;

  if (!file.type.startsWith("image/")) {
    errorMessage.value = "Only images can be uploaded";
    emit("error", "Only images can be uploaded");

    modelValue.value = null;

    target.value = "";
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    errorMessage.value = "File size must not exceed 2 MB";
    emit("error", "File size must not exceed 2 MB");

    modelValue.value = null;

    target.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = (e: ProgressEvent<FileReader>) => {
    const result = e.target?.result as string;

    errorMessage.value = "";
    modelValue.value = result;

    emit("change", file);
  };
  reader.readAsDataURL(file);

  target.value = "";
};

const removeFile = (): void => {
  fileName.value = "File_name.jpeg";
  errorMessage.value = "";
  modelValue.value = null;
  emit("change", null);
};
</script>

<template>
  <div class="upload-row" @click="triggerUpload">
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      class="upload-row__input"
      @change="handleFileChange"
    />

    <div class="upload-row__visual">
      <slot name="visual" />
    </div>

    <div class="upload-row__content">
      <div v-if="!modelValue && !errorMessage" class="info-block">
        <slot name="info">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </slot>
      </div>

      <div v-else class="file-manage">
        <div class="file-manage__info">
          <UiIcon
            v-if="!errorMessage"
            name="check-circle"
            class="icon-success"
          />
          <div class="file-manage__text">
            <span class="file-manage__name">{{ fileName }}</span>
            <span v-if="errorMessage" class="file-manage__error">
              {{ errorMessage }}
            </span>
          </div>
          <UiIcon name="trash" class="icon-delete" @click.stop="removeFile" />
        </div>
        <button class="change-file-btn" @click.stop="triggerUpload">
          Change file
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.upload-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 436px;
  height: 120px;
  cursor: pointer;
  user-select: none;

  &__input {
    display: none;
  }

  &__visual {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    position: relative;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-grow: 1;
  }
}

.info-block {
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  p {
    font-size: 14px;
    line-height: 18px;
    color: var(--6);
    margin: 0;
  }
}

.file-manage {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__info {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
  }

  &__name {
    font-weight: 600;
    font-size: 16px;
    color: var(--3);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__error {
    font-size: 12px;
    color: var(--error);
    margin-top: 2px;
  }
}

.icon-success {
  width: 24px;
  height: 24px;

  :deep(path) {
    fill: #55ad73;
  }
}

.icon-delete {
  width: 24px;
  height: 24px;
  color: var(--6);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ff4d4d;
  }
}

.change-file-btn {
  background: none;
  border: none;
  padding: 0;
  font-size: 14px;
  color: var(--light);
  text-decoration: underline;
  cursor: pointer;
  text-align: left;
  width: fit-content;
}
</style>
