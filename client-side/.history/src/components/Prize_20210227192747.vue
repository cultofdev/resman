<template>
    <div class="container">
        <img v-bind:src="prize.image_url" v-bind:alt="prize.name">

        <div class="prize-detail">
            <h1>Win a {{prize.name}}</h1>
            <hr>
            <button type="button">Redeem</button>
            <hr>
            <p>{{prize.quantity}} left in stock</p>
        </div>
    </div>
    
</template>

<script>
import PrizeService from '../shared/services/PrizeService';

export default {
    data() {
        return {
            prize: Object
        }
    },

    async mounted() {
        const params = new URLSearchParams();
        params.append('id', '6039e9363750fa5d3a1840a5')

        try {
            await PrizeService.get('http://localhost:5000/api/prize/one', params).then(res => (this.prize = res.data));

        } catch(error) {
            console.error(error);
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    padding-top: 25px;

    .prize-detail {
        width: 400px;
        height: 300px;
        background: #fff;
        border-radius: 10px;

        button {
            background: #ffcb30;
            width: 200px;
            border: none;
            line-height: 40px;
            display: inline-block;
            font-size: 16px;
            border-radius: 25px;
        }
    }
}
</style>