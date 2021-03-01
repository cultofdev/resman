<template>
    <h1>PRIZE PAGE</h1>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        msg: String
    }
})

export default class Prize extends Vue {
    msg!: string;
}
</script>