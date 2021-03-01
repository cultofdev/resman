<template>
    <div class="body">
        <div class="top-label">
            <h1 style="text-align: center">Rewards</h1>
        </div>
        <div class="detail-container">
            <img v-bind:src="prize.image_url" v-bind:alt="prize.name">
            <div class="spacer"></div>
            <div class="prize-detail">
                <h1>Win a {{prize.name}}</h1>
                <hr>
                <button type="button" v-on:click="openModal()">Redeem<i class="pi pi-angle-right"></i></button>
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
    </div>

    <DialogDoc>
        <Dialog v-model:visible="displayModal" :style="{width: '40vw'}" :modal="true" :showHeader="false">
            <div class="modal-body">
                <h1>Are you Sure?</h1>
                <img v-bind:src="prize.image_url" v-bind:alt="prize.name">
            </div>
            <!-- <p class="p-m-0">{{prize.description}}</p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
            </template> -->
        </Dialog>
    </DialogDoc>
</template>

<script>
import PrizeService from '../shared/services/PrizeService';
export default {
    data() {
        return {
            prize: Object,
            displayModal: false,
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
    },
    methods: {
        openModal() {
            this.displayModal = true;
        }
    },
}
</script>

<style scoped lang="scss">
.body {
    display: flex;
    flex-direction: column;
    background: #f7f7f7;

    .top-label {
        height: 200px;
        background: #0066a5;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-family: 'system-ui';
            font-weight: 900;
            color: #fff;
        }
    }

    .detail-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 25px;
        margin-bottom: 40px;

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
                outline: none;
                cursor: pointer;
            }

            i {
                margin-left: 5px;
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
        margin: 40px auto 50px auto;

        .label {
            display: flex;
            flex: 2;

            h2 {
                font-weight: 900;
                font-family: system-ui;
                margin-top: 0px;
            }
        }

        .description {
            display: flex;
            flex: 7;

            p {
                margin-top: 0px;
                text-align: left;
            }
        }
    }
}

.modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        font-weight: 900;
        color: #000;
    }

    img {
        border-radius: 50%;
        height: 200px;
        width: 200px;

    }
}
</style>