<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <template v-slot:links>
        <a href="#">Sign up Now</a>
        <a href="#">More info</a>
      </template>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if="showModalTwo">
    <Modal theme="" @close="toggleModalTwo">
      <h1>Sign up for the newsletter</h1>
      <p>Lets go bring them a take of medicine</p>
      <template v-slot:links>
        <a v-if="login">Login</a>
        <a v-else>Register</a>
      </template>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">Open Modal (ALT)</button>
  <button @click="toggleModalTwo">Open Modal Two</button>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the giveaway',
      text: 'Grab your ninja uniform for the warm up!',
      showModal: false,
      showModalTwo: false,
      login: true
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
  #app, #modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
  }
</style>
