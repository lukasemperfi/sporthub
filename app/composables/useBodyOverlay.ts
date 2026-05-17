import { useScrollLock } from "@vueuse/core";
import { watch, onMounted, onUnmounted, ref, type Ref } from "vue";

export function useBodyOverlay(isOpen: Ref<boolean>) {
  const bodyElement = ref<HTMLElement | null>(null);

  const isScrollLocked = useScrollLock(bodyElement);

  watch(isOpen, (val) => {
    isScrollLocked.value = val;
  });

  const close = () => {
    isOpen.value = false;
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen.value) {
      close();
    }
  };

  onMounted(() => {
    bodyElement.value = document.body;
    document.addEventListener("keydown", handleEscape);
  });

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
    isScrollLocked.value = false;
  });

  return { close };
}
