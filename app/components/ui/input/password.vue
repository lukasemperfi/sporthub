<script setup lang="ts">
import { ref, computed } from "vue";
import UiInput from "./index.vue";
import UiIcon from "../icon/index.vue";

interface UiPasswordInputProps {
  modelValue?: string | number | null;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: string | null;
  label?: string;
}

const props = withDefaults(defineProps<UiPasswordInputProps>(), {
  modelValue: "",
  placeholder: "",
  disabled: false,
  readonly: false,
  error: null,
  label: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur", ev: FocusEvent): void;
  (e: "focus", ev: FocusEvent): void;
}>();

const showPassword = ref(false);
const inputType = computed(() => (showPassword.value ? "text" : "password"));

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <UiInput
    :modelValue="props.modelValue"
    @update:modelValue="(value) => emit('update:modelValue', value)"
    :type="inputType"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :error="props.error"
    :label="props.label"
    @blur="(e) => emit('blur', e)"
    @focus="(e) => emit('focus', e)"
  >
    <template #right>
      <UiIcon
        :name="'eye'"
        @click="togglePasswordVisibility"
        class="password-icon"
        :class="{ 'password-icon_hide': showPassword }"
      />
    </template>
  </UiInput>
</template>

<style lang="scss" scoped>
.password-icon {
  &_hide {
    opacity: 0.5;
  }
}
</style>
