<template>
    <div class="container">
        <div class="sign-in">
            <h2>ResMan Login</h2>
            <span class="p-input-icon-right">
                <InputText type="text" v-model="username" class="p-inputtext-lg" placeholder="Enter Username.." :style="{width:'300px'}" />
                <i class="pi pi-user"></i>
            </span>
            <br>
            <span class="p-input-icon-right">
                <InputText type="text" v-model="username" class="p-inputtext-lg" placeholder="Enter Password.." :style="{width:'300px'}" />
                <i class="pi pi-lock"></i>
            </span>
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
    align-items: center;
    justify-content: center;
    height: 100vh;

    .sign-in {
        width: 450px;
        height: 350px;
        border-radius: 5px;
        background: rgb(243, 243, 243);
        box-shadow: 5px 5px 10px lightgray;
    }
}
</style>