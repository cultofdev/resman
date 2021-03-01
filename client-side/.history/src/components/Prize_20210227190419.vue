<template>
    <div style="display: flex; flex: 1; flex-direction: row">
        <img v-bind:src="prize.image_url" v-bind:alt="prize.name">
    </div>
    <div style="display: flex; flex: 1; flex-direction: row">
        <img v-bind:src="prize.image_url" v-bind:alt="prize.name">
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

</style>