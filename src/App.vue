<template>
  <container>
    <currentComponent @change-page="handleChangePage"></currentComponent>
    <!-- <StartPage @change-page="handleChangePage"></StartPage> -->

  </container>
</template>

<script>
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import EndPage from "./pages/EndPage";
import { computed,ref } from "vue";

export default {
  name: "App",
 components:{
  //  StartPage,
 },
  setup(){
    let currentPageName =ref("StartPage");
    // eslint-disable-next-line vue/return-in-computed-property
    const currentComponent = computed(() =>{
      
      if(currentPageName.value==="StartPage"){
        return StartPage;
      }else if(currentPageName.value==="GamePage"){
        return GamePage;
      }else if(currentPageName.value==="EndPage"){
        return EndPage;
      }
    });

    const handleChangePage = (page)=>{
      currentPageName.value=page;
      console.log(page);
    };
    return {
      currentComponent,
      handleChangePage,
    };
  },
 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

