<template>
    <nav>
        <img class="logo" src="../assets/logo.png" alt="resman">
        <div class=user-content>
            <img class="avatar" src="../assets/avatar.png" alt="user">
            <h3>Mark Solis</h3>
        </div>
    </nav>
</template>

<script>

</script>

<style lang="scss">
nav {
    display: flex;
    flex-direction: row;
}

.logo {
    width: 15%;
    height: 15%
}

.user-content {
    display: flex;
    flex-direction: row;
}

.avatar {
    height: 15%;
}
</style>