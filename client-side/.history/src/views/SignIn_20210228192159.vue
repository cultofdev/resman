<template>
    <div class="container">
        <div class="sign-in">
            <h2>ResMan Login</h2>
            <span class="p-input-icon-right">
                <InputText type="text" v-model="username" class="p-inputtext-lg" placeholder="Enter Username.." :style="{width:'300px'}" />
                <i class="pi pi-user"></i>
            </span>
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
    width: 100vw;
    padding: 0px;
    margin: 0px;
    position: absolute;
    top: 0;
    left: 0;
background: #1c92d2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f2fcfe, #1c92d2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f2fcfe, #1c92d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .sign-in {
        width: 450px;
        height: 350px;
        border-radius: 5px;
        background: rgb(253, 253, 253);
        box-shadow: 5px 5px 10px lightgray;
    }
}
</style>