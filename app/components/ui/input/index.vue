<script setup lang="ts">
import { computed, ref, useAttrs, useSlots } from "vue";

type InputType =
  | "text"
  | "email"
  | "password"
  | "tel"
  | "search"
  | "url"
  | "number";

type UiInputProps = {
  modelValue?: string | number | null;
  placeholder?: string;
  type?: InputType;
  disabled?: boolean;
  readonly?: boolean;
  error?: string | null;
  label?: string;
};

const props = withDefaults(defineProps<UiInputProps>(), {
  modelValue: "",
  placeholder: "",
  type: "text",
  disabled: false,
  readonly: false,
  error: null,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur", ev: FocusEvent): void;
  (e: "focus", ev: FocusEvent): void;
}>();

const attrs = useAttrs();
const slots = useSlots();

defineOptions({
  inheritAttrs: false,
});

const inputEl = ref<HTMLInputElement | null>(null);

const hasLeft = computed(() => Boolean(slots.left));
const hasRight = computed(() => Boolean(slots.right));
const hasError = computed(() => Boolean(props.error));

const rootClass = computed(() => [
  "ui-input",
  hasLeft.value && "ui-input_has-left",
  hasRight.value && "ui-input_has-right",
  hasError.value && "ui-input_has-error",
  props.disabled && "ui-input_is-disabled",
  attrs.class,
]);

function onInput(e: Event) {
  const target = e.target as HTMLInputElement | null;
  emit("update:modelValue", target?.value ?? "");
}

function focus() {
  inputEl.value?.focus();
}

function blur() {
  inputEl.value?.blur();
}

defineExpose({
  focus,
  blur,
  el: inputEl,
});
</script>

<template>
  <div :class="rootClass">
    <label v-if="props.label" class="ui-input__label">{{ props.label }}</label>
    <div class="ui-input__control">
      <span v-if="hasLeft" class="ui-input__affix ui-input__affix_left">
        <slot name="left" />
      </span>

      <input
        ref="inputEl"
        class="ui-input__field"
        :type="props.type"
        :value="props.modelValue ?? ''"
        :placeholder="props.placeholder"
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

      <span v-if="hasRight" class="ui-input__affix ui-input__affix_right">
        <slot name="right" />
      </span>
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

.ui-input {
  &__label {
    color: var(--3);
    font-weight: 400;
  }

  &__control {
    align-items: center;
  }

  &_is-disabled &__control {
    cursor: default;
  }

  &__affix {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 24px;
    height: 24px;
    color: var(--black);
    cursor: pointer;
  }

  &__affix_left {
    margin-right: 4px;
  }

  &__affix_right {
    margin-left: 4px;
    justify-content: flex-end;
  }

  &_has-left &__field {
    padding-left: 0;
  }

  &_has-right &__field {
    padding-right: 0;
  }

  &__field {
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #fff inset !important;
    }
  }

  &_has-error &__control:focus-within {
    border-bottom-color: var(--error);
  }
}
</style>
