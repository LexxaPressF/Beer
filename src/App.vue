<template>
  <div id="app">
    <Randomizer/>
    <Account/>
  </div>
</template>

<script>
  import Account from "./components/Account";
  import Randomizer from "./components/Randomizer";

export default {
  name: 'App',
  components: {
    Account,
    Randomizer
  }
}
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overflow: no-display;
}

body{
  background: url("https://kartinkin.net/uploads/posts/2021-07/1625490711_21-kartinkin-com-p-taverna-fon-krasivie-foni-25.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
