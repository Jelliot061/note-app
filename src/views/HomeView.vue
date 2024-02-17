<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters({
      islogIn: 'islogIn' // any name can be
    })
  },
  mounted () {
    if(!this.islogIn) {
      this.$router.push({ name: 'login' })
    }
  },
}
</script>

<style scoped>
  *{
    text-align: center;
  }
</style>