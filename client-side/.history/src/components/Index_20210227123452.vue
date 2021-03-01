<template>
    <div class="header">
        <div class="logo">
            <img class="logo" src="../assets/logo.png" alt="resman">
            <h1>LOGO</h1>
        </div>
        <div class="user-content">
            <div class="avatar"></div>
            <h3>Mark Solis</h3>
        </div>
    </div>
    <div class="body">
        <div class="top-label">
            <h1 style="text-align: center">REWARDS</h1>
        </div>
        <div class="prizes-container">
        
        </div>
        <div class="footer">
            <h2>Terms & Conditions | Privacy Policy</h2>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 75px;
    flex-basis: 100%;

    .logo {
        display: flex;
        flex-direction: row;
    }

    .user-content {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        .avatar {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background: lightgray;
        }

        h3 {
            margin-top: 5px
        }
    }
}

.body {
    .top-label {
        height: 200px;
        background: #116bf7;
        // margin-top: -30px;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            color: #fff;
        }
    }

    .prizes-container {
        background: lightgrey;
        height: 500px;
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