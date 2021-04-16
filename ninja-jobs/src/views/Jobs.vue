<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'ninja UX Developer', id: 1, detailes: 'lorem' },
        { title: 'ninja Web Developer', id: 2, detailes: 'lorem' },
        { title: 'ninja Vue Developer', id: 3, detailes: 'lorem' }
      ]
    }
  }
}
</script>

<style>

</style>