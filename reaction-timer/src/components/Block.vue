<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        Cick Me
    </div>
</template>

<script>
    export default {
        props: ['delay'],
        data() {
            return {
                showBlock: false,
                timer: null,
                reactionTime: 0
            }
        },
        methods: {
            startTimer() {
                this.timer = setInterval(() => {
                    this.reactionTime += 10
                }, 10)
            },
            stopTimer() {
                clearInterval(this.timer)
                console.log(this.reactionTime)
            }
        },
        beforeCreate() {
            console.log('beforeCreate')
        },
        created() {
            console.log('created')
        },
        beforeMount() {
            console.log('beforeMount')
        },
        mounted() {
            console.log('mounted')
            setTimeout(() => {
                this.showBlock = true
                this.startTimer()
            }, this.delay)
        },
        beforeUpdate() {
            console.log('beforeUpdate')
        },
        updated() {
            console.log('updated')
        },
        beforeUnmount() {
            console.log('beforeUnmount')
        },
        unmounted() {
            console.log('unmounted')
        }
    }
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>