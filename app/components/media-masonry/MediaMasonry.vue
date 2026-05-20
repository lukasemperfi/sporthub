<script setup lang="ts">
import { gsap } from "gsap";

const masonryContainer = ref<HTMLElement | null>(null);

const cards = ref([
  {
    id: 1,
    text: "Amet minim mollit non deserunt ullamco",
    img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=500",
    height: 118,
  },
  {
    id: 2,
    text: "Amet minim mollit non deserunt",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500",
    height: 170,
  },
  {
    id: 3,
    text: "Amet minim mollit non deserunt",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=500",
    height: 200,
  },
  {
    id: 4,
    text: "Amet minim mollit non deserunt ullamco",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500",
    height: 116,
  },
  {
    id: 5,
    text: "Amet minim mollit non deserunt ullamco",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=500",
    height: 160,
  },
  {
    id: 6,
    text: "Amet minim mollit non deserunt",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500",
    height: 200,
  },
  {
    id: 7,
    text: "Amet minim mollit non deserunt ullamco",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500",
    height: 170,
  },
  {
    id: 8,
    text: "Amet minim mollit non deserunt ullamco",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=500",
    height: 118,
  },
]);

onMounted(() => {
  if (!masonryContainer.value) return;

  const cardElements = masonryContainer.value.querySelectorAll(
    ".media-masonry__card",
  );

  cardElements.forEach((card) => {
    const durationX = 3 + Math.random() * 2.5;
    const durationY = 3.5 + Math.random() * 2.5;
    const moveX = 4 + Math.random() * 4;
    const moveY = 3 + Math.random() * 4;

    const tweens: gsap.core.Tween[] = [];

    // Анимация покачивания по оси X
    tweens.push(
      gsap.to(card, {
        x: moveX,
        duration: durationX,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }),
    );

    // Анимация покачивания по оси Y
    tweens.push(
      gsap.to(card, {
        y: moveY,
        duration: durationY,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }),
    );

    // Пауза движения + плавное увеличение масштаба (scale) через GSAP
    card.addEventListener("mouseenter", () => {
      tweens.forEach((tween) => tween.pause());
      gsap.to(card, {
        scale: 1.01,
        rotateZ: 0.01 /* Фикс размытия текста */,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    // Возобновление движения + плавный возврат масштаба к исходному
    card.addEventListener("mouseleave", () => {
      tweens.forEach((tween) => tween.play());
      gsap.to(card, {
        scale: 1,
        rotateZ: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  });
});
</script>

<template>
  <div ref="masonryContainer" class="media-masonry">
    <div class="media-masonry__grid">
      <MediaCard
        v-for="(card, index) in cards"
        :key="card.id"
        :image-url="card.img"
        :text="card.text"
        :height="card.height"
        :class="`media-masonry__card media-masonry__card_${index + 1}`"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.media-masonry {
  width: 100%;
  height: 100%;
  max-width: 638px;
  display: flex;
  align-items: center;

  &__grid {
    display: grid;
    grid-template-columns: repeat(638, 1fr);
    grid-template-rows: 170px 200px 200px 170px;
    row-gap: 30px;
  }

  &__card {
    align-self: flex-end;
    position: relative;
    z-index: 1;
    cursor: pointer;

    transition:
      box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1),
      z-index 0s;

    will-change: transform, box-shadow;
    backface-visibility: hidden;
    perspective: 1000px;

    &:hover {
      z-index: 10;

      /* Равномерная контурная тень: выходит ровно на 10px во все стороны (spread = 10px) */
      box-shadow: 0 0 15px 5px rgba(187, 187, 187, 0.35);
    }

    &_1 {
      grid-column: 123 / 334;
      grid-row: 1;
      justify-self: flex-end;
    }
    &_2 {
      grid-column: 364/577;
      grid-row: 1;
    }
    &_3 {
      grid-column: 49 / 403;
      grid-row: 2;
    }
    &_4 {
      grid-column: 431 / 638;
      grid-row: 2;
    }
    &_5 {
      grid-column: 1 / 200;
      grid-row: 3;
    }
    &_6 {
      grid-column: 231 / 582;
      grid-row: 3;
    }
    &_7 {
      grid-column: 76 / 287;
      grid-row: 4;
    }
    &_8 {
      grid-column: 317/524;
      grid-row: 4;
      align-self: flex-start;
    }
  }
}
</style>
