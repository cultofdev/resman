<template>
    <div class="container">
        <img v-bind:src="prize.image_url" v-bind:alt="prize.name">

        <div class="prize-detail">

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
    flex-direction: row;
    justify-content: space-evenly;

    .prize-detail {
        width: 200px;
        height: 200px;
    }
}
</style>