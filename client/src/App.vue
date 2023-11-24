<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Mitr:wght@300&display=swap');
*{
   font-family: 'Itim', cursive;
  font-family: 'Mitr', sans-serif;
}

/* *{
  margin: 0;
  padding: 0;
  box-sizing: border-box
} */
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>