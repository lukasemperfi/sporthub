<script setup lang="ts">
import type { SwiperOptions } from "swiper/types";

const trainersLeft = ref([
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
    name: "Devon Lane",
    role: "Fitness trainer",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    name: "Kristin Watson",
    role: "Rehabilitation specialist",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
    name: "Courtney Henry",
    role: "Yoga guru",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    name: "Theresa Webb",
    role: "Cardio Expert",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    name: "Brian Johnson",
    role: "Powerlifting Coach",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
    name: "Natalie Smith",
    role: "Aerobics Instructor",
  },
]);

const trainersRight = ref([
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
    name: "Marcus Aurelius",
    role: "CrossFit Coach",
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    name: "Elena Rostova",
    role: "Pilates Instructor",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
    name: "Dorian Yates",
    role: "Bodybuilding Mentor",
  },
  {
    id: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
    name: "Amelie Vandal",
    role: "Stretching Expert",
  },
  {
    id: 11,
    imageUrl:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop",
    name: "Alex Carter",
    role: "HIIT Specialist",
  },
  {
    id: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=600&auto=format&fit=crop",
    name: "Michael Chang",
    role: "Functional Training Pro",
  },
]);

const carouselLeftOptions: Partial<SwiperOptions> = {
  direction: "vertical",
  //   slidesPerView: 2.2,
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 32,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  allowTouchMove: false,
};
const carouselRightOptions: Partial<SwiperOptions> = {
  direction: "vertical",
  //   slidesPerView: 2.9,
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 24,
  loop: true,
  speed: 3034,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },

  allowTouchMove: false,
};
</script>

<template>
  <div class="trainer-carousel">
    <UiCarousel
      :items="trainersLeft"
      :options="carouselLeftOptions"
      class="trainer-carousel__swiper trainer-carousel__swiper_left"
    >
      <template #item="{ item }">
        <TrainerCard
          :image-url="item.imageUrl"
          :name="item.name"
          :role="item.role"
          class="trainer-carousel__card"
        />
      </template>
    </UiCarousel>
    <UiCarousel
      :items="trainersRight"
      :options="carouselRightOptions"
      class="trainer-carousel__swiper trainer-carousel__swiper_right"
    >
      <template #item="{ item }">
        <TrainerCard
          :image-url="item.imageUrl"
          :name="item.name"
          :role="item.role"
          class="trainer-carousel__card"
        />
      </template>
    </UiCarousel>
  </div>
</template>

<style lang="scss" scoped>
.trainer-carousel {
  position: relative;
  width: 543px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  gap: 43px;
  min-width: 0;

  &__swiper {
    width: 100%;
    height: 100%;
    max-height: 100vh;

    &_left {
      max-width: 280px;

      :deep(.swiper-slide) {
        width: 100%;
        height: 340px;
      }

      &:not(.swiper-initialized) {
        :deep(.swiper-wrapper) {
          display: grid;

          row-gap: 32px;
          overflow: hidden;

          .swiper-slide {
            aspect-ratio: 280/340;
          }

          .swiper-slide:nth-child(n + 4) {
            display: none;
          }
        }
      }
    }
    &_right {
      max-width: 220px;

      :deep(.swiper-slide) {
        width: 100%;
        height: 280px;
      }

      &:not(.swiper-initialized) {
        :deep(.swiper-wrapper) {
          display: grid;
          row-gap: 24px;
          overflow: hidden;

          .swiper-slide {
            aspect-ratio: 220/280;
          }

          .swiper-slide:nth-child(n + 4) {
            display: none;
          }
        }
      }
    }
  }

  &__card {
    margin: 0 auto;
  }

  :deep(.swiper-wrapper) {
    transition-timing-function: linear !important;
  }
}
</style>
