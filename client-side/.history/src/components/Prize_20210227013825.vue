<template>
    <div class="header">
        <img class="logo" src="../assets/logo.png" alt="resman">
        <div class="user-content">
            <img class="avatar" src="../assets/avatar.png" alt="user">
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: row;
    height: 75px;
    background: burlywood;
    flex-basis: 100%;
}

.logo {
    height: 40%;
}

.user-container {
    display: flex;
    flex-direction: row;

    .avatar {
        height: 50%;
    }
}


</style>