<template>
  <container>
    <sprite :texture="mapPath" :y="mapY1"></sprite>
    <sprite :texture="mapPath" :y="mapY2"></sprite>
  </container>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import mapPath from "../assets/map.jpg";
import { game } from "../game";
export default {
  setup() {
    const { mapY1, mapY2 } = useMove();
    return {
      mapPath,
      mapY1,
      mapY2,
    };
  },
};

function useMove() {
  const gameHeight = 1080;
  const mapY1 = ref(0);
  const mapY2 = ref(-gameHeight);

  //  ticker
  const speed = 10;
  const handleTicker = () => {
    mapY1.value += speed;
    mapY2.value += speed;

    if (mapY1.value >= gameHeight) {
      mapY1.value = -gameHeight;
    }

    if (mapY2.value >= gameHeight) {
      mapY2.value = -gameHeight;
    }
  };

  onMounted(() => {
    game.ticker.add(handleTicker);
  });

  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });

  return {
    mapY1,
    mapY2,
  };
}
</script>

<style></style>