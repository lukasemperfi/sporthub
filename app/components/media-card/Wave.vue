<template>
  <div class="audio-wave-container" :style="{ '--progress': `${progress}%` }">
    <svg
      class="audio-wave track-background"
      :viewBox="`0 0 ${viewBoxWidth} 30`"
      xmlns="http://w3.org"
    >
      <rect
        v-for="(heightValue, index) in barsLarge"
        :key="`bg-${index}`"
        class="bar"
        :class="{ animated: isAnimated }"
        :x="index * 4"
        y="0"
        width="2"
        height="30"
        rx="1"
        :style="{
          '--h': heightValue / 30,
          'animation-delay': `${(index % 5) * -0.3}s`,
        }"
      />
    </svg>

    <svg
      class="audio-wave track-progress"
      :viewBox="`0 0 ${viewBoxWidth} 30`"
      xmlns="http://w3.org"
    >
      <rect
        v-for="(heightValue, index) in barsLarge"
        :key="`prog-${index}`"
        class="bar"
        :class="{ animated: isAnimated }"
        :x="index * 4"
        y="0"
        width="2"
        height="30"
        rx="1"
        :style="{
          '--h': heightValue / 30,
          'animation-delay': `${(index % 5) * -0.3}s`,
        }"
      />
    </svg>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
  isAnimated: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: String,
    default: "#eee",
  },
  activeColor: {
    type: String,
    default: "#8f5334",
  },
});

const barsLarge = [
  2, 2, 6, 14, 22, 12, 2, 14, 20, 25, 8, 4, 2, 8, 14, 20, 12, 6, 4, 2, 5, 12,
  18, 10, 2, 14, 20, 25, 8, 4, 2, 8, 14, 20, 12, 6, 4, 2, 2, 2, 5, 12, 18, 10,
  2, 14, 24, 29, 8, 4, 2, 8, 14, 20, 12, 14, 20, 25, 8, 4, 2, 8, 14, 20, 2, 4,
  8, 4, 2,
];

const viewBoxWidth = computed(() => barsLarge.length * 4 - 2);
</script>

<style scoped>
.audio-wave-container {
  display: inline-block;
  position: relative;
  width: 100%;
  max-width: 100%;
}

.audio-wave {
  width: 100%;
}

.track-background {
  fill: v-bind("props.bgColor");
}

.track-progress {
  position: absolute;
  top: 0;
  left: 0;
  fill: v-bind("props.activeColor");

  -webkit-mask-image: linear-gradient(
    to right,
    black var(--progress),
    transparent var(--progress)
  );
  mask-image: linear-gradient(
    to right,
    black var(--progress),
    transparent var(--progress)
  );

  transition:
    -webkit-mask-image 0.1s linear,
    mask-image 0.1s linear;
}

.bar {
  transform-origin: center;
  transform: scaleY(var(--h));
  transition: transform 0.3s ease-in-out;
}

.bar.animated {
  animation: pulse 1.2s ease-in-out infinite alternate;
  transition: none;
}

@keyframes pulse {
  0% {
    transform: scaleY(calc(var(--h) * 0.3));
  }
  100% {
    transform: scaleY(calc(var(--h) * 1.3));
  }
}
</style>
