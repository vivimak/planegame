<template>
  <container>
    <sprite :texture="endPagePath"></sprite>
    <sprite
      :texture="restartBtn"
      x="250"
      y="520"
      :interactive="true"
      @click="handleClick"
    ></sprite>
  </container>
</template>

<script>
import endPagePath from "../assets/end_page.jpg";
import restartBtn from "../assets/restartBtn.png";
export default {
  setup(props, { emit }) {
    const handleClick = () => {
      emit("change-page", "GamePage");
    };

    return {
      endPagePath,
      restartBtn,
      handleClick,
    };
  },
};
</script>

<style></style>