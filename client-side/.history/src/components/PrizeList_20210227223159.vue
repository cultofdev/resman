<template>
    <h3>Here is the full list of prizes that you can win.</h3>

    <div class="container">
        <div class="prize-box" v-for="item in prizes" :key="item.id">
            <div class="image">
                <img v-bind:src="item.image_url" v-bind:alt="item.name">
            </div>
            <div class="content">
                <h3>Win a {{item.name}}</h3>
            </div>
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
    justify-content: space-evenly;

    .prize-box {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        background: #fff;

        .image {
            img {
                height: 70%;
            }
        }

        .content {
            h3 {
                font-weight: 900;
                font-family: system-ui;
            }
        }
    }
}
</style>