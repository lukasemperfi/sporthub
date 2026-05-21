<script setup lang="ts">
import { computed } from "vue";

// 1. Описываем интерфейс входных параметров (Props)
interface Props {
  title?: string;
  description?: string;
  duration?: number; // Длительность анимации в секундах
  pauseOnHover?: boolean; // Останавливать ли анимацию при наведении
}

// 2. Vue 3.5+ Реактивная деструктуризация defineProps
// Больше не нужен withDefaults! Значения по умолчанию задаются прямо здесь.
const {
  title = "Заголовок карточки",
  description = "Описание эффекта покачивания на воде.",
  duration = 6,
  pauseOnHover = true,
} = defineProps<Props>();

// 3. Вычисляем динамический стиль для управления скоростью из родительского компонента
const cardStyle = computed(() => ({
  "--animation-duration": `${duration}s`,
}));
</script>
<template>
  <div
    class="water-card"
    :class="{ 'is-paused-on-hover': pauseOnHover }"
    :style="cardStyle"
  >
    <!-- Слот для гибкости: сюда можно положить любой контент -->
    <slot>
      <div class="water-card__default-content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.water-card {
  // Базовые стили карточки (можно настроить под себя)
  width: 100%;
  max-width: 320px;
  padding: 24px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);

  // Логика анимации
  transform-origin: center center;
  animation: floatOnWater var(--animation-duration) ease-in-out infinite;
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;

  // Опциональная остановка анимации при наведении
  &.is-paused-on-hover:hover {
    animation-play-state: paused;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }

  // Стили для дефолтного контента (БЭМ нейминг)
  &__default-content {
    font-family:
      system-ui,
      -apple-system,
      sans-serif;

    h3 {
      margin: 0 0 8px 0;
      font-size: 1.25rem;
      color: #1a1a1a;
    }

    p {
      margin: 0;
      font-size: 0.95rem;
      color: #666666;
      line-height: 1.5;
    }
  }
}

// Ключевые кадры для эффекта "листика на воде"
@keyframes floatOnWater {
  0%,
  100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  20% {
    transform: translateY(-6px) translateX(2px) rotate(1.5deg);
  }
  40% {
    transform: translateY(4px) translateX(-3px) rotate(-1deg);
  }
  60% {
    transform: translateY(-4px) translateX(3px) rotate(2deg);
  }
  80% {
    transform: translateY(3px) translateX(-1px) rotate(-1.5deg);
  }
}
</style>
