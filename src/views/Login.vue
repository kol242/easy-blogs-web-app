<template>
  <div class="form-wrap">
      <form action="" class="login">
          <p class="login-register">
              Don't have an account?
              <router-link class="router-link" :to="{ name: 'Register' }">Register</router-link>
          </p>
          <h2>Login to EasyBlogs</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="email" v-model="email">
                  <email class="icon" />
              </div>
              <div class="input">
                  <input type="password" placeholder="password" v-model="password">
                  <password class="icon" />
              </div>
              <div v-show="error" class="error">{{ this.errorMsg }}</div>
          </div>
          <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">Forgot your password?</router-link>
          <button @click.prevent="signIn">Sign In</button>
      </form>
  </div>
</template>

<script>
import '../assets/style/views/Login.scss'
import email from '../assets/Icons/envelope-regular.svg'
import password from '../assets/Icons/lock-alt-solid.svg'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    name: 'login',
    components: {
        email,
        password
    },
    data() {
        return {
            email: null,
            password: null,
            error: null,
            errorMsg: "",  
        }
    },
    methods: {
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.$router.push({ name: 'Home' })
                this.error = false
                this.errorMsg = ''
                console.log(firebase.auth().currentUser.uid)
            }).catch((err) => {
                this.error = true
                this.errorMsg = err.message
            })
        }
    }
}
</script>
