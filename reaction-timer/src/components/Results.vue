<template>
  <div>
      <p>Your reaction time is {{ score }}ms</p>
      <h1 class="rank">{{ rank }}</h1>
  </div>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = 'Ninja Fingers'
        } else if (this.rank < 400) {
            this.rank = 'Rapid Reflexes'
        } else {
            this.rank = 'Snail pace...'
        }
    }
}
</script>

<style>
    .rank {
        color: #0faf87;
        font-weight: bold;
    }
</style>