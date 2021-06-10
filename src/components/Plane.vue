<template>
  <container>
    <sprite :texture="PlaneImg"></sprite>
  </container>
</template>

<script>
import { reactive, onMounted, onUnmounted } from "vue";
import PlaneImg from "../assets/plane.png";
export default {
  setup() {
    return {
      PlaneImg,
    };
  },
};

//xx
export function usePlane(options) {
  const planeInfo = reactive({
    x: 150,
    y: 750,
    width: 258,
    height: 364,
  });

  // move -> 飞机 移动逻辑
  // 写好代码
  // 1. 通过命名表达出代码的意图
  // 抽离代码的层次
  function move() {
    // mvvm 数据驱动我们的 view
    const speed = 10;
    function handleKeyup(e) {
      switch (e.code) {
        case "ArrowUp":
          planeInfo.y -= speed;

          break;
        case "ArrowDown":
          planeInfo.y += speed;

          break;
        case "ArrowLeft":
          planeInfo.x -= speed;

          break;
        case "ArrowRight":
          planeInfo.x += speed;

          break;

        default:
          break;
      }
    }

    onMounted(() => {
      window.addEventListener("keyup", handleKeyup);
    });

    onUnmounted(() => {
      window.removeEventListener("keyup", handleKeyup);
    });
  }

  function attack() {
    // 空格 attack

    const handleKeyup = (e) => {
      if (e.code === "Space") {
        console.log("attck");
        const position = {
          x: planeInfo.x + 100,
          y: planeInfo.y,
        };
        options.onAttack && options.onAttack(position);
      }
    };

    onMounted(() => {
      window.addEventListener("keyup", handleKeyup);
    });

    onUnmounted(() => {
      window.removeEventListener("keyup", handleKeyup);
    });
  }

  move();
  attack();

  return {
    planeInfo,
  };
}
</script>

<style></style>
