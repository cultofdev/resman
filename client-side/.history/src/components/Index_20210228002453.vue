<template>
    <!-- <div class="header">
        <div class="logo">
            <img src="../assets/logo.png" alt="resman" >
            <h1>LOGO</h1>
        </div>
        <div class="user-content">
            <div class="avatar"></div>
            <h5>Mark Solis</h5>
        </div>
    </div> -->
    <div class="body">
        <div class="top-label">
            <h1 style="text-align: center">Rewards</h1>
        </div>
        <div class="prizes-container">
            <PrizeList />
        </div>
        <!-- <div class="footer">
            <h2>Terms & Conditions | Privacy Policy</h2>
        </div> -->
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import PrizeList from '../components/PrizeList';

@Options({
    components: {
        PrizeList
    }
})
export default class Index extends Vue {}
</script>

<style scoped lang="scss">
.body {
    display: flex;
    flex-direction: column;

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

    .prizes-container {
        background: #f7f7f7;
    }
}
</style>