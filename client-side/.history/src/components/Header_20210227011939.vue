<template>
    <nav>
        <img class="logo" src="../assets/logo.png" alt="resman">
        <div class=user-content>
            <img class="avatar" src="../assets/avatar.png" alt="user">
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
    display: flex;
    flex-direction: row;
}

.logo {
    width: 15%;
    height: 15%
}

.avatar {
    width: 10%;
    height: 10%;
}
</style>