<template>
    <div class="container">
        <div class="sign-up">
            <h2>ResMan Register</h2>
            <input type="text" v-model="username" name="username"  placeholder="Enter Username..">
            <input type="text" v-model="password" name="password" placeholder="Enter Password..">
            <input type="text" v-model="retypePassword" name="retypePassword" placeholder="Retype Password..">
            <input type="text" v-model="fullName" name="fullName" placeholder="Enter Full Name..">

            <Button label="Register" @click="signUp" class="p-button-rounded" />
        </div>
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

    async signUp() {
        const data = {
            // username: this.username,
            // password: this.password,
            // full_name: this.fullName,
        }

        if(this.password.trim() === this.retypePassword.trim()) {
            await AuthService.post('http://localhost:5000/api/user', data).then(
                () => {
                    alert('success')
                },
                () => { 
                    alert('an error was encountered while creating user');
                }
            )
        } else {
            alert('passwords do not match!')
        }
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
            width: 250px;
            height: 42px;
            margin-top: 20px;
            margin-bottom: 35px;
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