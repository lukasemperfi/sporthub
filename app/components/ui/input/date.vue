<script setup lang="ts">
import { computed, useAttrs, useTemplateRef } from "vue";

interface UiDateInputProps {
  modelValue?: string | null;
  disabled?: boolean;
  readonly?: boolean;
  error?: string | null;
  label?: string;
}

const props = withDefaults(defineProps<UiDateInputProps>(), {
  modelValue: "",
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

const attrs = useAttrs();
// Ссылка на сам инпут для вызова календаря через JS
const inputRef = useTemplateRef<HTMLInputElement>("inputField");

const hasError = computed(() => Boolean(props.error));

const rootClass = computed(() => [
  "ui-input",
  hasError.value && "ui-input_has-error",
  props.disabled && "ui-input_is-disabled",
  attrs.class,
]);

function onInput(e: Event) {
  const target = e.target as HTMLInputElement | null;
  emit("update:modelValue", target?.value ?? "");
}

// Функция для открытия календаря при клике на контейнер
function openDatePicker() {
  if (props.disabled || props.readonly || !inputRef.value) return;

  // Метод showPicker() поддерживается всеми современными браузерами
  if (typeof inputRef.value.showPicker === "function") {
    inputRef.value.showPicker();
  } else {
    inputRef.value.focus(); // Фолбэк для старых браузеров
  }
}
</script>

<template>
  <div :class="rootClass">
    <label v-if="props.label" class="ui-input__label">{{ props.label }}</label>

    <!-- Клик по этой области триггерит открытие календаря -->
    <div class="ui-input__control" @click="openDatePicker">
      <input
        ref="inputField"
        class="ui-input__field"
        type="date"
        :value="props.modelValue ?? ''"
        :disabled="props.disabled"
        :readonly="props.readonly"
        v-bind="attrs"
        :aria-invalid="hasError ? 'true' : undefined"
        :aria-describedby="
          hasError
            ? attrs.id
              ? `${String(attrs.id)}-error`
              : undefined
            : undefined
        "
        @input="onInput"
        @focus="(e) => emit('focus', e)"
        @blur="(e) => emit('blur', e)"
      />
    </div>

    <p
      v-if="hasError"
      class="ui-input__error"
      :id="attrs.id ? `${String(attrs.id)}-error` : undefined"
      role="alert"
    >
      {{ props.error }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "./_shared.scss";

.ui-input__control {
  cursor: pointer;
}

.ui-input__field {
  text-transform: uppercase;
}

.ui-input__field::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  color: transparent;
  background: transparent;
  cursor: pointer;
}

.ui-input__field::-moz-calendar-picker-indicator {
  opacity: 0;
  z-index: 1;
}
</style>
