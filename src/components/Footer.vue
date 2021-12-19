<template>
   <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"><logo class="logo" />EasyBlogs</router-link>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/valentino-kolinger-96236a19a/"><linkedin class="svg-icon"/></a>
              <a href="https://www.facebook.com/valentino.kolinger/"><facebook class="svg-icon"/></a>
              <a href="https://github.com/kol242"><github class="svg-icon"/></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
            <router-link class="link" :to="{ name: user ? 'CreatePost' : 'Login' }">Create Post</router-link>
            <router-link v-if="!user" class="link" :to="{ name: 'Login' }">Login In / Register</router-link>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021 All Rights Reserved</p>
        <p>Created by Kole242®</p>
      </div>
    </div>
  </footer>
</template>

<script>
import linkedin from "../assets/Icons/linkedin-brands.svg";
import facebook from "../assets/Icons/facebook.svg";
import github from "../assets/Icons/github.svg";
import logo from '../assets/Icons/logo.svg'
import "../assets/style/Footer.scss"

export default {
  name: "footer-vue",
  components: {
    linkedin,
    logo,
    facebook,
    github
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.profileAdmin;
    },
  },
};
</script>