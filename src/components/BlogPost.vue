<template>
  <div class="blog-wrapper" :class="{'no-user' : !user}">
      <div class="blog-content">
          <div>
              <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
              <h2 v-else>{{ post.blogTitle }}</h2>
              <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
              <p class="content-preview" v-else v-html="post.blogHTML"></p>
              <router-link class="link-btn" v-if="post.welcomeScreen" :to="{ name: 'Login' }">
                  Login/Register
              </router-link>
              <router-link class="link-btn__dark" v-else :to="{ name: 'ViewBlog', params: {blogid: this.post.blogID} }">
                  View the post
              </router-link>
          </div>
      </div>
    <div class="blog-photo">
        <img v-if="post.welcomeScreen" :src="require('../assets/blogPhotos/cover-photo.jpg')" alt="">
        <img v-else :src="post.blogCoverPhoto" alt="">
    </div>
  </div>
</template>

<script>
import '../assets/style/BlogPost.scss'
export default {
    name: 'blogPost',
    props: ["post"],
    computed: {
      user() {
      return this.$store.state.user;
    }
    }
}
</script>
