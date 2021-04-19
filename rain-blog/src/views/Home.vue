<template>
  <div class="home">
    <h1>My name is {{ name }} and age is {{ age }}</h1>
    <button @click="handleClick">Handle Click</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  setup() {
    let name = 'Mario'
    let age = 30

    const handleClick = () => {
      console.log('you clicked me!')
    }

    return { name, age, handleClick }
  }
}
</script>
