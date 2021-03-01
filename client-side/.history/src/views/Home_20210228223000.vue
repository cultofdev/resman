<template>
    <div class="container">
        <Header />
            <div class="body">
                <div class="top-label">
                    <h1 style="text-align: center">Rewards</h1>
                </div>
                <div class="prizes-container">
                    <PrizeList />
                </div>
            </div>
        <Footer />
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import PrizeList from '../components/PrizeList';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

@Options({
    components: {
        Header,
        Footer,
        PrizeList,
    }
})
export default class Index extends Vue {}
</script>

<style scoped lang="scss">
.container {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.body {
    display: flex;
    flex-direction: column;

    .top-label {
        height: 200px;
        background: #0066a5;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-family: 'system-ui';
            font-weight: 900;
            color: #fff;
        }
    }

    .prizes-container {
        background: #f7f7f7;
    }
}
</style>