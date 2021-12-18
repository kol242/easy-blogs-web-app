<template>
  <div class="blog-wrapper" :class="{'no-user' : !user}">
      <div class="blog-content">
          <div>
              <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
              <h2 v-else>{{ post.blogTitle }}</h2>
              <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
              <p class="content-preview" v-else v-html="post.blogHTML"></p>
              <router-link class="link link-light" v-if="post.welcomeScreen" :to="{ name: 'Login' }">
                  Login/Register<Arrow class="arrow arrow-light" />
              </router-link>
              <router-link class="link" v-else :to="{ name: 'ViewBlog', params: {blogid: this.post.blogID} }">
                  View the post<Arrow class="arrow" />
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
import Arrow from '../assets/Icons/arrow-right.svg'
import '../assets/style/BlogPost.scss'
export default {
    name: 'blogPost',
    props: ["post"],
    components: {
        Arrow
    },
    computed: {
      user() {
      return this.$store.state.user;
    }
    }
}
</script>
