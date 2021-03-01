<template>
    <div class="container">

    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PrizeList from '../components/PrizeDetail';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

@Options({
    components: {
        Header,
        Footer,
        PrizeList,
    }
})
export default class Home extends Vue {}
</script>