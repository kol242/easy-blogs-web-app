<template>
  <header>
      <nav class="container">
          <div class="branding">
              <logo class="logo"/><router-link class="header" :to="{ name: 'Home' }">EasyBlogs</router-link>
          </div>
          <div class="nav-links">
              <ul v-show="!mobile">
                  <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                  <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
                  <router-link v-if="user" class="link" :to="{ name: 'CreatePost' }">Create Post</router-link>
                  <router-link v-if="!user" class="link" :to="{ name: 'Login' }">Login/Register</router-link>
              </ul>
              <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
                <span>{{ this.$store.state.profileInitials }}</span>
                <div v-show="profileMenu" class="profile-menu">
                  <div class="info">
                    <p class="initials">{{ this.$store.state.profileInitials }}</p>
                    <div class="right">
                      <p>{{ this.$store.state.profileFirstName }} {{ this.$store.state.profileLastName }}</p>
                      <p>{{ this.$store.state.profileUsername }}</p>
                      <p>{{ this.$store.state.profileEmail }}</p>
                    </div>
                  </div>
                  <div class="options">
                    <div class="option">
                      <router-link class="option" :to="{ name: 'Profile' }">
                        <userIcon class="icon" />
                        <p>Profile</p>
                      </router-link>
                    </div>
                    <div @click="signOut" class="option">
                        <signOutIcon class="icon" />
                        <p>Sign out</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </nav>
      <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
      <transition name="mobile-nav">
        <ul class="mobile-nav" v-show="mobileNav">
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
            <router-link v-if="user" class="link" :to="{ name: 'CreatePost' }">Create Post</router-link>
            <router-link v-if="!user" class="link" :to="{ name: 'Login' }">Login/Register</router-link>
        </ul>
      </transition>
  </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg'
import logo from '../assets/Icons/logo.svg'
import userIcon from '../assets/Icons/user-alt-light.svg'
import signOutIcon from '../assets/Icons/sign-out-alt-regular.svg'
import firebase from 'firebase/app'
import 'firebase/auth'
import '../assets/style/Navbar.scss'

export default {
    name: 'navigation',
    components: {
        menuIcon,
        userIcon,
        signOutIcon,
        logo
    },
    data() {
        return {
            profileMenu: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },
    methods: {
        signOut() {
          firebase.auth().signOut()
          window.location.reload()
        },
        checkScreen() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 750) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
        toggleProfileMenu(e) {
          if (e.target === this.$refs.profile) {
            this.profileMenu = !this.profileMenu
          }
        }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    }
}
</script>
