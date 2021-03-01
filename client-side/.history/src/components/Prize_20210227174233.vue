<template>
    <div></div>
</template>

<script>
import PrizeService from '../shared/services/PrizeService';

export default {
    data() {
        return {
            prizes: []
        }
    },

    async created() {
        try {
            const res = PrizeService.get('http://localhost:5000/api/prize').then()

            console.log(res);
        } catch(error) {
            console.error(error);
        }
    }
}
</script>

<style scoped lang="scss">

</style>