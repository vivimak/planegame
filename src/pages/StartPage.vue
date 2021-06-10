<template>
  <container>
    <sprite :texture="startPagePath"></sprite>
    <sprite
      :texture="startBtn"
      x="250"
      y="520"
      :interactive="true"
      @click="handleClick"
    ></sprite>
  </container>
</template>

<script>
import startPagePath from "../assets/start_page.jpg";
import startBtn from "../assets/startBtn.png";
export default {
  setup(props, { emit }) {
    const handleClick = () => {
      emit("change-page", "GamePage");
    };

    return {
      startPagePath,
      startBtn,
      handleClick,
    };
  },
};
</script>

<style></style>
