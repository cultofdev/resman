<template>
    <div class="header">
        <img class="logo" src="../assets/logo.png" alt="resman">
        <div class="user-content">
            <img class="avatar" src="../assets/avatar.png" alt="user">
            <h3>Mark Solis</h3>
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
    background: burlywood;
    flex-basis: 100%;
}

.logo {
    height: 40%;
}

.user-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .avatar {
        height: 50%;
    }
}
</style>