<template>
    
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