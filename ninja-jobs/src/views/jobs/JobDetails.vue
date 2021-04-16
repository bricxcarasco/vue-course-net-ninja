<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>Job ID: {{ job.id }}</p>
    <p>Job Details: {{ job.details }}</p>
  </div>
  <div v-else>
    <h1>loading job detail...</h1>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then(res => res.json())
      .then(job => this.job = job)
      .catch(err => console.log(err.message))
  }
 }
</script>

<style>

</style>