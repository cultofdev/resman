<template>
    <h3>Here is the full list of prizes that you can win.</h3>

    <div class="container">
        <div class="prize-box" v-for="item in prizes" :key="item.id">
            <img v-bind:src="item.image_url" v-bind:alt="item.name">
            <div class="content">
                <h3>Win a {{item.name}}</h3>

                <button v-on:click="gotopage(item.id)" type="button">Redeem</button>
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
    },
    
    methods: {
        gotopage(id) {
            console.log({id})
            // this.$router.push({ path: '/prize', query: { id: id } });
        }
    }
}
</script>

<style scoped lang="scss">
h3 {
    margin-top: 50px;
    margin-bottom: 60px;
    font-weight: 500;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 50px;

    .prize-box {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        background: #fff;
        width: 350px;
        height: 425px;
        margin: 7px;

        img {
            width: 100%;
            height: 50%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

        .content {
            h3 {
                font-weight: 900;
                font-family: system-ui;
            }

            button {
                background: #ffcb30;
                width: 180px;
                border: none;
                line-height: 40px;
                font-size: 16px;
                border-radius: 25px;
                outline: none;
                margin-left: auto;
                margin-right: auto;
                cursor: pointer;
            }
        }
    }
}
</style>