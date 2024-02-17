<template>
  <div class="note">
    <CreateNoteCompo />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CreateNoteCompo from '@/components/CreateNoteCompo.vue'

export default {
  name: 'NoteView',
  components: {
    CreateNoteCompo
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
