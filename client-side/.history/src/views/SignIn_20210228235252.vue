<template>
    <div class="container">
        <div class="sign-in">
            <h2>ResMan Login</h2>
            <input type="text" v-model="username" name="username" placeholder="Enter Username..">
            <input type="text" v-model="password" name="password" placeholder="Enter Password..">
            <Button :disabled="!username || !password" label="Login" @click="login" class="p-button-rounded" />
            <p>Don't have an account? <span @click="goToSignUp">Register Here</span>.</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import AuthService from '../shared/services/AuthService';

export default class SignIn extends Vue {

    public username = '';
    public password = '';

    async login() {
        const params = {
            username: this.username,
            password: this.password
        }

        await AuthService.login('http://localhost:5000/api/user', params).then(
            () => {
                localStorage.setItem('isUserAuthenticated', 'true');
                this.$router.push('/');
            },
            () => {
                alert('Invalid credentials')
            }
        )
    }

    goToSignUp() {
        this.$router.push('/signup')
    }
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
    background: #EFEFBB;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #D4D3DD, #EFEFBB);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #D4D3DD, #EFEFBB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .sign-in {
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
            margin-bottom: 10px;
            border-radius: 20px;
            padding-left: 20px;
            font-size: 18px;
            color: #003271
        }

        button {
            background: #ffcb30;
            width: 250px;
            height: 42px;
            margin-top: 20px;
            outline: none;
            border: 0;
            color: #000
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