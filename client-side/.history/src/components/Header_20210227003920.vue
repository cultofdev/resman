<template>
    <nav>
        <img src="../assets/logo.png" alt="">
    </nav>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        msg: String
    }
})

export default class Header extends Vue {
    
}
</script>