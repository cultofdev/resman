<template>
    <div v-for="item in prizes" :key="item.id">{{item.name}}</div>
</template>

<script>
import PrizeService from '../shared/services/PrizeService';

export default {
    data() {
        return {
            prizes: [
                { id: '1', name: 'name1' },
                { id: '2', name: 'name2' },
                { id: '3', name: 'name3' },
            ]
        }
    },

    // async mounted() {
    //     try {
    //         const res = PrizeService.get('http://localhost:5000/api/prize').then()

    //         this.prizes = res;
    //     } catch(error) {
    //         console.error(error);
    //     }
    // }
}
</script>

<style scoped lang="scss">

</style>