<script setup lang="ts">
const cards = ref([
  {
    id: 1,
    text: "Amet minim mollit non deserunt ullamco",
    img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=500",
    width: 198,
    height: 158,
  },
  {
    id: 2,
    text: "Amet minim mollit non deserunt",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500",
    width: 353,
    height: 199,
  },
  {
    id: 3,
    text: "Amet minim mollit non deserunt",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=500",
    width: 210,
    height: 168,
  },
  {
    id: 4,
    text: "Amet minim mollit non deserunt ullamco",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500",
  },
  {
    id: 5,
    text: "Amet minim mollit non deserunt ullamco",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=500",
  },
  {
    id: 6,
    text: "Amet minim mollit non deserunt",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500",
  },
  {
    id: 7,
    text: "Amet minim mollit non deserunt ullamco",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500",
  },
  {
    id: 8,
    text: "Amet minim mollit non deserunt ullamco",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=500",
  },
]);
</script>

<template>
  <div ref="masonryContainer" class="media-masonry">
    <div class="media-masonry__grid">
      <MediaCard
        v-for="(card, index) in cards"
        :key="card.id"
        :image-url="card.img"
        :text="card.text"
        :class="`media-masonry__card media-masonry__card_${index + 1}`"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.media-masonry {
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: 638px;

  &__grid {
    display: grid;
    grid-template-columns: repeat(638, 1fr);
    grid-template-rows: 170px 200px 200px 170px;
    // gap: 30px;
    row-gap: 30px;
  }
  &__card {
    align-self: flex-end;
    &_1 {
      grid-column: 123 / 334;
      grid-row: 1;
      height: 118px;
      justify-self: flex-end;
    }
    &_2 {
      grid-column: 364/577;
      grid-row: 1;
      height: 170px;
    }
    &_3 {
      grid-column: 49 / 403;
      grid-row: 2;
      height: 200px;
    }
    &_4 {
      grid-column: 431 / 638;
      grid-row: 2;
      height: 116px;
    }
    &_5 {
      grid-column: 1 / 200;
      grid-row: 3;
      height: 160px;
    }
    &_6 {
      grid-column: 231 / 582;
      grid-row: 3;
      height: 200px;
    }
    &_7 {
      grid-column: 76 / 287;
      grid-row: 4;
      height: 170px;
    }
    &_8 {
      grid-column: 317/524;
      grid-row: 4;
      height: 118px;
      align-self: flex-start;
    }
  }
}
</style>
