<template>
    <div class="detail-container">
        <img v-bind:src="prize.image_url" v-bind:alt="prize.name">
        <div class="spacer"></div>
        <div class="prize-detail">
            <h1>Win a {{prize.name}}</h1>
            <hr>
            <button type="button">Redeem</button>
            <hr>
            <p>{{prize.quantity}} left in stock</p>
        </div>
    </div>
    
    <hr>

    <div class="description-container">
        <div class="label">
            <h2>Description</h2>
        </div>
        <div class="description">
            <p>{{prize.description}}</p>
        </div>
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
.detail-container {
    display: flex;
    padding-top: 25px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;

    .spacer {
        width: 25px;
    }

    .prize-detail {
        display: flex;
        flex-direction: column;
        width: 450px;
        height: 300px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 1px gainsboro;

        h1, p {
            text-align: left;
            margin-left: 30px;
        }

        hr {
            width: 85%;
            color: lightgray
        }

        button {
            background: #ffcb30;
            width: 200px;
            border: none;
            line-height: 40px;
            display: inline-block;
            font-size: 16px;
            border-radius: 25px;
            margin: 15px 0px 15px 30px;
            outline: none
        }
    }
}

hr {
    width: 75%;
}

.description-container {
    display: flex;
    justify-content: space-around;
    width: 75%;
    margin-left: auto;
    margin-right: auto;

    .label {
        display: flex;
        flex: 2;

        h2 {
            font-weight: 900;
            font-family: system-ui;
        }
    }

    .description {
        display: flex;
        flex: 6;

        p {
            text-align: left;
        }
    }
}
</style>