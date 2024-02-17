<template>
  <div class="app-container">
    <h2>Note Application</h2>
    <h3>User: Jelliot061</h3>
    <form class="note-form">
      <input type="text" v-model="newNote.title" placeholder="Title" required />
      <textarea v-model="newNote.description" placeholder="Description" rows="10"></textarea>
        <button type="submit" @click="addNote">
            Add Note
        </button>
    </form>
    <div class="notes-grid" v-for="(note, index) in notes" :key="index">
      <div class="note-item">
        <div class="note-header">
          <button @click="editNote(index)">Edit</button>
          <button @click="deleteNote(index)">X</button>
        </div>
        <h2>{{ note.title }}</h2>
        <p>{{ note.description }}</p>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: {
        title: '',
        description: '',
      },
      notes: [],
    };
  },

  mounted() {
    this.loadNotes();
  },

  methods: {
    addNote() {
      if (this.newNote.title.trim() !== '' && this.newNote.description.trim() !== '') {
        this.notes.push({
          title: this.newNote.title.trim(),
          description: this.newNote.description.trim()
        });
        this.saveNotes(); // Save notes after adding a new note
        this.newNote.title = '';
        this.newNote.description = '';
      }
    },
    editNote(index) {
      const updatedTitle = prompt('Update title:', this.notes[index].title);
      const updatedDescription = prompt('Update description:', this.notes[index].description);
      if (updatedTitle !== null && updatedDescription !== null) {
        this.notes.splice(index, 1, {
          title: updatedTitle.trim(),
          description: updatedDescription.trim()
        });
        this.saveNotes(); // Save notes after editing a note
      }
    },
    
    deleteNote(index) {
      if (confirm('Are you sure you want to delete this note?')) {
        this.notes.splice(index, 1);
        this.saveNotes(); // Save notes after deleting a note
      }
    },
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
    loadNotes() {
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        this.notes = JSON.parse(savedNotes);
      }
    },
  },
}

</script>

<style>
body {
  background-color: slategray;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.app-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.note-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
}

.note-form input,
.note-form textarea {
  border: none;
  padding: 5px;
  font-size: 16px;
}

.note-form textarea {
  resize: none;
}

.note-form button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.note-form button:hover {
  background-color: #0062cc;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.note-item {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.note-header {
  display: flex;
  justify-content: flex-end;
}

.note-header button {
  border: none;
  background-color: transparent;
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s ease;
}

.note-header button:hover {
  color: #007bff;
}

.note-title {
  font-size: 20px;
  margin-bottom: 5px;
}

/* Edit mode styles */
.note-item textarea {
  border: none;
  padding: 5px;
  font-size: 16px;
  display: none; /* Initially hidden */
}

.note-item [v-if] {
  display: block; /* Show elements based on v-if conditions */
}

</style>