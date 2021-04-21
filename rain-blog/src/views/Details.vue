<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="!post">
    loading...
  </div>
  <div v-else class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import getPost from '../composables/getPost'

export default {
  props: ['id'],
  setup(props) {
    const { post, error, load } = getPost(props.id)

    load()

    return { post, error }
  }
}
</script>

<style>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>