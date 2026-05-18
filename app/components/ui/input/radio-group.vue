<script setup lang="ts">
import { computed, useAttrs } from "vue";
import UiRadio from "./radio.vue";

interface UiRadioGroupProps {
  modelValue?: string | number | boolean | null;
  label?: string;
  options: { label: string; value: string | number | boolean }[];
  disabled?: boolean;
}

const props = withDefaults(defineProps<UiRadioGroupProps>(), {
  modelValue: null,
  label: "",
  disabled: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | boolean): void;
}>();

const attrs = useAttrs();

const rootClass = computed(() => [
  "ui-radio-group",
  props.disabled && "ui-radio-group_is-disabled",
  attrs.class,
]);

function onRadioChange(value: string | number | boolean) {
  emit("update:modelValue", value);
}
</script>

<template>
  <div :class="rootClass">
    <label v-if="props.label" class="ui-radio-group__label">{{
      props.label
    }}</label>
    <div class="ui-radio-group__control">
      <UiRadio
        v-for="option in props.options"
        :key="String(option.value)"
        :value="option.value"
        :label="option.label"
        :model-value="props.modelValue"
        :disabled="props.disabled"
        @update:modelValue="onRadioChange"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./_shared.scss";

.ui-radio-group {
  &__label {
    @extend .ui-input__label;
  }

  &__control {
    display: flex;
    gap: 16px;
    // flex-wrap: wrap;

    .ui-radio {
      flex: 1 1 auto;
    }
  }

  &_is-disabled {
    opacity: 0.7;
  }
}
</style>
