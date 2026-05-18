<script setup lang="ts">
import { computed, useAttrs } from "vue";

type ButtonVariant = "solid" | "outline";

type UiButtonProps = {
  disabled?: boolean;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
};

const props = withDefaults(defineProps<UiButtonProps>(), {
  disabled: false,
  variant: "solid",
  type: "button",
});

const attrs = useAttrs();

const className = computed(() => [
  "ui-button",
  `ui-button_variant_${props.variant}`,
  attrs.class,
]);
</script>

<template>
  <button :type="props.type" :disabled="props.disabled" :class="className">
    <slot name="left-icon" />
    <slot />
    <slot name="right-icon" />
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  outline: none;
  user-select: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  padding: 9px;
  min-width: 180px;
  min-height: 44px;

  transition:
    background-color 150ms ease,
    color 150ms ease,
    border-color 150ms ease,
    opacity 150ms ease;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid rgba(23, 26, 30, 0.35);
    outline-offset: 3px;
  }

  &_variant_outline {
    background: transparent;
    color: var(--light);
    border: 1px solid var(--light);

    :deep(path) {
      transition: 150ms ease;
    }

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background: var(--light);
        color: var(--3);

        :deep(path) {
          fill: var(--3);
        }
      }
    }
  }

  &_variant_solid {
    background: var(--light);
    color: var(--3);
    border: 1px solid transparent;

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background: var(--middle);
        border-color: var(--middle);
      }
    }
  }
}
</style>
