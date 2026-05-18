<script setup lang="ts">
interface UiTextareaProps {
  modelValue?: string | null;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: string | null;
  label?: string;
}

const props = withDefaults(defineProps<UiTextareaProps>(), {
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

const attrs = useAttrs();

const hasError = computed(() => Boolean(props.error));

const rootClass = computed(() => [
  "ui-textarea",
  hasError.value && "ui-textarea_has-error",
  props.disabled && "ui-textarea_is-disabled",
  attrs.class,
]);

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const adjustHeight = async () => {
  if (!textareaRef.value) return;
  await nextTick();
  textareaRef.value.style.height = "auto";
  textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
};

watch(() => props.modelValue, adjustHeight, { immediate: true });

function onInput(e: Event) {
  const target = e.target as HTMLTextAreaElement | null;
  emit("update:modelValue", target?.value ?? "");
}
</script>

<template>
  <div :class="rootClass">
    <label v-if="props.label" class="ui-textarea__label">{{
      props.label
    }}</label>
    <div class="ui-textarea__control">
      <textarea
        ref="textareaRef"
        class="ui-textarea__field"
        :value="props.modelValue ?? ''"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :readonly="props.readonly"
        rows="1"
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
      ></textarea>
    </div>

    <p
      v-if="hasError"
      class="ui-textarea__error"
      :id="attrs.id ? `${String(attrs.id)}-error` : undefined"
      role="alert"
    >
      {{ props.error }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "./_shared.scss";

.ui-textarea__field {
  resize: none;
  overflow-y: hidden;
}
</style>
