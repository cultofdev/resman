<template>
    <nav>
        <img class="logo" src="../assets/logo.png" alt="resman">
        <div class="user-section">
            <img class="avatar" src="../assets/avatar.png" alt="user">
            <h3>Mark Solis</h3>
        </div>
    </nav>
</template>

<script>

</script>

<style lang="scss">
nav {
    position: absolute;
    top: 0;
    padding-top: 10px;
}

.logo {
    width: 10%;
    height: 10%
}

.avatar {
    width: 10%;
    height: 10%;
}

.user-section {
    display: flex;
    flex-direction: row;
}
</style>