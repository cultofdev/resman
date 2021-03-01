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
        <div class="footer">
            <h2>Terms & Conditions | Privacy Policy</h2>
        </div>
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
// .header {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     height: 75px;
//     flex-basis: 100%;
//     margin-bottom: 10px;

//     .logo {
//         display: flex;
//         flex: 1;
//         height: 80%;
//         padding-left: 20px;

//         h1 {
//             margin-left: 10px;
//             font-weight: 100;
//             align-self: center;
//         }
//     }

//     .user-content {
//         display: flex;
//         flex: 1;
//         justify-content: flex-end;
//         align-items: center;
//         padding-right: 40px;

//         .avatar {
//             height: 50px;
//             width: 50px;
//             border-radius: 50%;
//             background: rgb(235, 233, 233);
//         }

//         h5 {
//             margin-left: 10px;
//             align-self: center;
//         }
//     }
// }

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

    .footer {
        background: rgb(2,0,36);
        background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(227,227,255,1) 0%, rgba(82,82,92,1) 0%, rgba(44,44,49,1) 0%, rgba(42,42,48,1) 0%, rgba(53,53,60,1) 1%, rgba(47,47,53,1) 1%, rgba(40,40,45,1) 16%, rgba(28,28,32,1) 26%, rgba(0,0,0,1) 58%, rgba(0,0,0,1) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;

        h2 {
            color: #fff;
        }
    }
}
</style>