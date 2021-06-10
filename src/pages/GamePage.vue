<template>
  <container>
      <Map></Map>
       <Plane :x="planeInfo.x" :y="planeInfo.y"></Plane>
    <EnemyPlane
      v-for="(enemy, index) in enemyPlanes"
      :key="index"
      :x="enemy.x"
      :y="enemy.y"
    >
    </EnemyPlane>
    <Bullet
      v-for="(bullet, index) in bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    ></Bullet>
  </container>
</template>

<script>
import Map from "../components/Map";
import Plane, { usePlane } from "../components/Plane.vue";
import EnemyPlane, { useEnemyPlane } from "../components/EnemyPlane.vue";
import Bullet, { useBullet } from "../components/Bullet.vue";
import { hitObject } from "../utils";
import { onMounted, onUnmounted } from "vue";
import { game } from "../game";

export default {
  components:{
    Map,
    Plane,
    EnemyPlane,
    Bullet,
  },
 setup(props, { emit }) {
    const { bullets, addBullet } = useBullet();

    const { planeInfo } = usePlane({
      onAttack(position) {
        addBullet(position);
      },
    });

    const { enemyPlanes } = useEnemyPlane();
    // const { planeInfo } = usePlane({
    //   onAttack: addBullet,
    // });

    const gameOver = () => emit("change-page", "EndPage");

    //  fighting
    useFighting({
      planeInfo,
      bullets,
      enemyPlanes,
      gameOver,
    });

    return {
      bullets,
      enemyPlanes,
      planeInfo,
    };
  },
};

function useFighting({ planeInfo, bullets, enemyPlanes, gameOver }) {
  // 数据
  function handleTicker() {
    // 敌军和我方飞机的碰撞检测
    enemyPlanes.forEach((enemy) => {
      if (hitObject(enemy, planeInfo)) {
        // hit
        console.log("hit");
        // game over
        // emit("change-page", "EndPage");
        gameOver();
      }
    });

    // 敌军和我方子弹的碰撞检测
    enemyPlanes.forEach((enemy, enemyIndex) => {
      bullets.forEach((bullet, bulletIndex) => {
        if (hitObject(enemy, bullet)) {
          // hit
          // 双方都销毁
          enemyPlanes.splice(enemyIndex, 1);
          bullets.splice(bulletIndex, 1);
        }
      });
    });
  }

  onMounted(() => {
    game.ticker.add(handleTicker);
  });

  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });
}
</script>

<style></style>
