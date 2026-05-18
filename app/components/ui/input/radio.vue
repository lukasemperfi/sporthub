<script setup lang="ts">
import { computed, useAttrs } from "vue";

interface UiRadioProps {
  modelValue?: string | number | boolean | null;
  value: string | number | boolean;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<UiRadioProps>(), {
  modelValue: false,
  label: "",
  disabled: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | boolean): void;
}>();

const attrs = useAttrs();

const isChecked = computed(() => props.modelValue === props.value);

const rootClass = computed(() => [
  "ui-radio",
  isChecked.value && "ui-radio_is-checked",
  props.disabled && "ui-radio_is-disabled",
  attrs.class,
]);

function onChange() {
  if (!props.disabled) {
    emit("update:modelValue", props.value);
  }
}
</script>

<template>
  <label :class="rootClass">
    <input
      type="radio"
      :value="props.value"
      :checked="isChecked"
      :disabled="props.disabled"
      @change="onChange"
      class="ui-radio__field"
      v-bind="attrs"
    />
    <span class="ui-radio__indicator">
      <span v-show="isChecked" class="ui-radio__dot"></span>
    </span>
    <span v-if="props.label" class="ui-radio__label">{{ props.label }}</span>
  </label>
</template>

<style scoped lang="scss">
@import "./_shared.scss";

.ui-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  gap: 8px;
  background: var(--9);
  border-radius: 8px;
  width: 100%;

  &_is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &__field {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  &__indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid var(--8);
    background: var(--9);
    flex-shrink: 0;
    transition:
      background 0.25s ease,
      border-color 0.25s ease;
  }

  &_is-checked &__indicator {
    background: var(--light);
    border-color: var(--9);
  }

  &__dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--9);
    transition:
      transform 0.25s ease,
      opacity 0.25s ease;
  }

  &__label {
    color: var(--3);
    font-weight: 400;
    font-size: 14px;
    white-space: nowrap;
    transition: color 0.25s ease;
  }
}
</style>
