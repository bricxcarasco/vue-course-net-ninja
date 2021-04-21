<template>
  <div class="post">  
    <h2>
      <router-link :to="{ name: 'Details', params: { id: post.id } }">{{ post.title }}</router-link>
    </h2>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return `${props.post.body.substring(0, 100)}...`
    })

    return { snippet }
  }
}
</script>

<style>

</style>