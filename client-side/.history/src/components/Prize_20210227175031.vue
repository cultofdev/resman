<template>
    <div v-for="item in prizes" :key="item.id">{{item.name}}</div>
</template>

<script>
import PrizeService from '../shared/services/PrizeService';

export default {
    data() {
        return {
            prizes: []
        }
    },

    async mounted() {
        try {
            await PrizeService.get('http://localhost:5000/api/prize').then(res => (this.prizes = res.data));

        } catch(error) {
            console.error(error);
        }
    }
}
</script>

<style scoped lang="scss">

</style>