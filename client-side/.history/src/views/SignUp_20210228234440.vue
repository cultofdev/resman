<template>
    <div class="container">
        <div class="sign-up">
            <h2>ResMan Register</h2>
            <input type="text" v-model="username" name="username"  placeholder="Enter Username..">
            <input type="text" :disabled="!username" v-model="password" name="password" placeholder="Enter Password..">
            <input type="text" :disabled="!password" v-model="retypePassword" name="retypePassword" placeholder="Retype Password..">
            <input type="text" :disabled="!retypePassword" v-model="fullName" name="fullName" placeholder="Enter Full Name..">

            <Button label="Register" :disabled="!fullName" @click="signUp" class="p-button-rounded" />
        </div>

        <Dialog v-model:visible="displaySuccessModal" :style="{width: '30vw'}" :modal="true" :showHeader="false">
            <div class="success-modal-body">
                <h1>Congratulations!</h1>
                <p>You are now registered in the app, click Ok to go to the login page.</p>

                <button type="button" @click="goToLogin">Go to Login</button>
            </div>
        </Dialog>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import AuthService from '../shared/services/AuthService';

export default class SignUp extends Vue {
    public username = '';
    public password = '';
    public retypePassword = '';
    public fullName = '';

    public displaySuccessModal = false;

    async signUp() {
        const data = {
            username: this.username,
            password: this.password,
            fullName: this.fullName,
        }

        if(this.password.trim() === this.retypePassword.trim()) {
            await AuthService.post('http://localhost:5000/api/user', data).then(
                () => {
                    this.displaySuccessModal = true;
                },
                () => { 
                    alert('an error was encountered while creating user');
                }
            )
        } else {
            alert('passwords do not match!')
        }
    }

    goToLogin() {
        this.$router.push('/signin');
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
    background: #1c92d2;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #f2fcfe, #1c92d2);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #f2fcfe, #1c92d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .sign-up {
        width: 450px;
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
            margin-bottom: 35px;
            outline: none;
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

.success-modal-body {
    button {
        background: #ffcb30;
        width: 150px;
        border: none;
        line-height: 35px;
        display: inline-block;
        font-size: 13px;
        border-radius: 25px;
        outline: none;
        margin: 10px;
        cursor: pointer;
    }
}
</style>