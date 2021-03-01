<template>
    <h3>Here is the full list of prizes that you can win.</h3>

    <div class="container">
        <div class="prize-box" v-for="item in prizes" :key="item.id">
            <img v-bind:src="item.image_url" v-bind:alt="item.name">
        </div>
    </div>
</template>

<script>
import PrizeService from '@/shared/services/PrizeService'

export default {
    data() {
        return {
            prizes: []
        }
    },

    async mounted() {
        try {
            await PrizeService.get('http://localhost:5000/api/prize/all').then(res => (this.prizes = res.data));
        } catch(error) {
            console.error(error);
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-wrap: wrap;

    .prize-box {
        display: flex;
        flex: 1;
        flex-direction: column;

        img {
            height: 50%;
            width: 50%
        }
    }
}
</style>