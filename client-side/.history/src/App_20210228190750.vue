<template>
  <SignIn />
  <!-- <div class="content">
    <Header />
      <router-view></router-view>
    <Footer />
  </div> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import SignIn from './views/SignIn.vue';
// import SignUp from './views/SignUp.vue';

@Options({
  components: {
    Header,
    Footer,

    SignIn,
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">

.content {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: lightgray;
}
</style>
