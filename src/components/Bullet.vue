<template>
  <container>
    <sprite :texture="BulletImg"></sprite>
  </container>
</template>

<script>
import { reactive, onMounted, onUnmounted } from "vue";
import { game } from "../game";
import BulletImg from "../assets/bullet.png";
export default {
  setup() {
    return {
      BulletImg,
    };
  },
};

export function useBullet() {
  const width = 61;
  const height = 99;
  const bullets = reactive([]);

  function addBullet(position) {
    bullets.push({ ...position, width, height });
  }

  function move() {
    const speed = 10;
    const handleTicker = () => {
      bullets.forEach((bullet) => {
        bullet.y -= speed;
      });

      // TODO 超出屏幕应该销毁
    };

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
  }

  move();

  return {
    addBullet,
    bullets,
  };
}
</script>

<style></style>
