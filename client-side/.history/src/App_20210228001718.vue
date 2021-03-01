<template>
  <div class="content">
    <Index />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Index from './components/Index.vue';

@Options({
  components: {
    Index,
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
}
</style>
