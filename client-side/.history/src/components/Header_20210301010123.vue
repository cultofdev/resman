<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/logo.png" alt="resman" >
            <h1>LOGO</h1>
        </div>
        <div class="user-content">
            <div class="avatar" @click="toggle"></div>
            <h5>{{fullName}}</h5>
        </div>

        <OverlayPanel ref="user">
            <Button icon="pi pi-sign-out" @click="logout" class="p-button-rounded p-button-secondary" />
        </OverlayPanel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullName: ''
        }
    },
    async mounted() {
        this.fullName = localStorage.getItem('fullName');
    },
    methods: {
        toggle(event) {
            this.$refs.user.toggle(event);
        },
        logout() {
            this.localStorage.clear();
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    flex-basis: 100%;
    margin-bottom: 10px;

    .logo {
        display: flex;
        flex: 1;
        height: 80%;
        padding-left: 20px;

        h1 {
            margin-left: 10px;
            font-weight: 100;
            align-self: center;
        }
    }

    .user-content {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        padding-right: 40px;

        .avatar {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background: rgb(235, 233, 233);
            cursor: pointer;
        }

        h5 {
            margin-left: 10px;
            align-self: center;
        }
    }
}
</style>