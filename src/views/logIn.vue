<template>
    <div class="login">
      <div class="login_card">
          <h3>Login</h3>
          <label>Username:</label>
          <input v-model="username" required > <br><br>
          <label>Password:</label>
          <input v-model="password" type="password" required minlength="5"><br><br>
          <button @click="signIn()">Log In</button>
      </div>
    </div>
  </template>
  
  <script>
  
  import { mapActions } from 'vuex';
  
  export default {
      name: 'logIn',
  
      data () {
          return {
              username: '',
              password: ''
          }
      },
  
      methods: {
          ...mapActions({
              setlogIn: 'setlogIn',
              setInfo: 'setInfo'
          }),
  
          signIn () {
              if(this.username === 'admin' && this.password === 'admin') {
                  this.setlogIn(true)
                  this.setInfo({
                      username: this.username,
                      password: this.password
                  })
                  this.$router.push({ name: 'home' })  //true
              } else {
                  alert('Username / Password Invalid !!!')
              }
          }
      },
  }
  </script>
  
  <style scoped>
      .login{
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-content: center;
      }
  
      .login_card{
          width: 300px;
          padding: 24px;
          border: solid black 1px;
          border-radius: 8px;
      }
  </style>