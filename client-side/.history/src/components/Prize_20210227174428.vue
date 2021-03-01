<template>
    <div v-for="item in prizes" :key="item.id"></div>
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
            const res = PrizeService.get('http://localhost:5000/api/prize').then()

            this.prizes = res;
        } catch(error) {
            console.error(error);
        }
    }
}
</script>

<style scoped lang="scss">

</style>