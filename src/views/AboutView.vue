<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
