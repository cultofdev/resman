<template>
    <div class="container">

    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import PrizeDetail from '../components/PrizeDetail';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

@Options({
    components: {
        Header,
        Footer,
        PrizeDetail,
    }
})
export default class Home extends Vue {}
</script>