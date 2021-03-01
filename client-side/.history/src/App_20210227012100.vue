<template>
  <div class="content">
    <Header />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Prize from './components/Prize.vue';
import Header from './components/Header.vue';

@Options({
  components: {
    Prize,
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">

.content {
  width: 60%;
  background: gray;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  background: gray;
  height: 300px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
