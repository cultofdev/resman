<template>
    <div class="container">
        <div class="sign-up">
            <h2>ResMan Register</h2>
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
    background: -webkit-linear-gradient(to top, #f2fcfe, #1c92d2);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #f2fcfe, #1c92d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .sign-up {
        width: 450px;
        height: 350px;
        border-radius: 5px;
        padding-top: 10px;
        background: rgb(253, 253, 253);
        box-shadow: 5px 5px 10px lightgray;

        h2 {
            color: #187dfd;
            font-weight: 900
        }

        input {
            width: 350px;
            height: 42px;
            outline: none;
            border: 0;
            background: lightblue;
            margin-bottom: 5px;
            border-radius: 20px;
            padding-left: 20px;
            font-size: 18px;
            color: #003271
        }

        button {
            width: 250px;
            height: 42px;
            margin-top: 20px;
        }

        p {
            margin-top: 50px;
            user-select: none;
        }

        span {
            font-weight: bold;
            cursor: pointer;
            user-select: none
        }
    }
}
</style>