<template>
    <div v-for="item in prizes" :key="item.id">{{item.name}}</div>
</template>

<script>
import PrizeService from '../shared/services/PrizeService';

export default {
    data() {
        return {
            prize
        }
    },

    async mounted() {
        const params = new URLSearchParams();
        params.append('id', '6039e9363750fa5d3a1840a5')

        try {
            await PrizeService.get('http://localhost:5000/api/prize/one', params).then(res => console.log(res.data));

        } catch(error) {
            console.error(error);
        }
    }
}
</script>

<style scoped lang="scss">

</style>