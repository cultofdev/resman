<template>
    <div class="container">
        <div class="sign-in">
            <h1>LOGIN</h1>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    
}
</script>

<style scoped lang="scss">
body {
    background: #83a4d4;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #b6fbff, #83a4d4);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #b6fbff, #83a4d4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .sign-in {
        display: flex;
    }
}
</style>