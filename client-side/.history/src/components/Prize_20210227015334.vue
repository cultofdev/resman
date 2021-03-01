<template>
    <div class="header">
        <img class="logo" src="../assets/logo.png" alt="resman">
        <div class="user-content">
            <img class="avatar" src="../assets/avatar.png" alt="user">
            <h3>Mark Solis</h3>
        </div>
    </div>
    <div class="body">
        <div class="top-label">
            <h1 style="text-align: center">REWARDS</h1>
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
        height: 40%;
    }

    .user-content {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        .avatar {
            height: 50%;
            margin-right: 10px;
        }

        h3 {
            margin-top: 5px
        }
    }
}

.body {
    .top-label {
        height: 250px;
        background: #116bf7;
    }
}
</style>