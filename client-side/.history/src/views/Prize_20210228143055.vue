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
                <button type="button" v-on:click="openSuccessModal()">Redeem<i class="pi pi-angle-right"></i></button>
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

    <Dialog v-model:visible="displayConfirmModal" :style="{width: '40vw'}" :modal="true" :showHeader="false">
        <div class="confirm-modal-body">
            <span @click="closeConfirmModal"><i class="pi pi-times"></i></span>
            <h1>Are you Sure?</h1>
            <img v-bind:src="prize.image_url" v-bind:alt="prize.name">

            <p>Redeem for {{prize.name}}?</p>

            <div class="button-row">
                <button type="button" style="background: #ffcb30">Yes</button>
                <button type="button" @click="closeConfirmModal">Cancel</button>
            </div>
        </div>
    </Dialog>

    <Dialog v-model:visible="displaySuccessModal" :style="{width: '40vw'}" :modal="true" :showHeader="false">
        <div class="success-modal-body">
            <span @click="closeSuccessModal"><i class="pi pi-times"></i></span>
            <h1>Congratulations!</h1>
            <p>You redeemed</p>
            <p>{{prize.name}}</p>

            <button type="button">Yes</button>
        </div>
    </Dialog>
</template>

<script>
import PrizeService from '../shared/services/PrizeService';
export default {
    data() {
        return {
            prize: Object,
            displayConfirmModal: false,
            displaySuccessModal: false,
        }
    },
    async mounted() {
        const params = new URLSearchParams();
        params.append('id', this.$route.query.id)

        try {
            await PrizeService.get('http://localhost:5000/api/prize/one', params).then(res => (this.prize = res.data));

        } catch(error) {
            console.error(error);
        }
    },
    methods: {
        openConfirmModal() {
            this.displayConfirmModal = true;
        },
        closeConfirmModal() {
            this.displayConfirmModal = false;
        },
        openSuccessModal() {
            this.displaySuccessModal = true;
        },
        closeSuccessModal() {
            this.displaySuccessmModal = false;
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

.confirm-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        align-self: flex-end;
        margin-top: 15px;
        cursor: pointer;

        i {
            font-size: 30px;
        }
    }

    h1 {
        text-align: center;
        font-weight: 900;
        color: #000;
        margin-top: 0px;
    }

    img {
        border-radius: 50%;
        height: 200px;
        width: 200px;
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 50px;
    }

    .button-row {

        button {
            width: 150px;
            border: none;
            line-height: 35px;
            display: inline-block;
            font-size: 13px;
            border-radius: 25px;
            outline: none;
            margin: 10px;
            cursor: pointer;
        }
    }
}

.success-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        align-self: flex-end;
        margin-top: 15px;
        cursor: pointer;

        i {
            font-size: 30px;
        }
    }

    h1 {
        text-align: center;
        font-weight: 900;
        color: #000;
    }

    p {
        margin-bottom: 0px;
    }

    button {
        background: #ffcb30;
        width: 150px;
        border: none;
        line-height: 35px;
        display: inline-block;
        font-size: 13px;
        border-radius: 25px;
        outline: none;
        margin: 10px;
        cursor: pointer;
    }
}
</style>