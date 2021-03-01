<template>
    <div class="container">
        <div class="sign-in">
        </div>
    </div>
</template>

<script lang="ts">
export default {
    
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .sign-in {
        width: 400px;
        height: 350px;
        border-radius: 5px;
        background: lightgray;
        display: flex;
        box-shadow: 3px 3px 3px lightgray;
    }
}
</style>