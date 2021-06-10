<template>
  <container>
    <sprite :texture="PlaneImg"></sprite>
  </container>
</template>

<script>
import { reactive, onMounted, onUnmounted } from "vue";
import { game } from "../game";
import PlaneImg from "../assets/enemy.png";
export default {
  setup() {
    return {
      PlaneImg,
    };
  },
};

//xx
export function useEnemyPlane() {
  // 写死的数据
  // TODO 自动创建对应的数据
  const width = 308;
  const height = 207;
  const enemyPlanes = reactive([
    {
      x: 50,
      y: 50,
      width,
      height,
    },
    {
      x: 100,
      y: 100,
      width,
      height,
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  function move() {
    // 敌军可以移动
    const speed = 1;

    const handleTicker = () => {
      enemyPlanes.forEach((enemy, i) => {
        enemy.y += speed;

        // 当超出屏幕的时候 ，应该移除
        if (enemy.y >= 1080 + 100) {
          enemyPlanes.splice(i, 1);
        }
      });
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
    enemyPlanes,
  };
}
</script>

<style></style>
