<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div v-if="user" class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost">
      </div>
      <BlogCard :post="post" v-for="(post, index) in blogPosts" :key="index" />
    </div>
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'
import '../assets/style/views/Blogs.scss'
export default {
    name: 'blogs',
    components: {BlogCard},
    computed: {
      blogPosts() {
        return this.$store.state.blogPosts
      },
      editPost: {
        get() {
          return this.$store.state.editPost
        },
        set(payload) {
          this.$store.commit("toggleEditPost", payload)
        }
      },
      user() {
      return this.$store.state.user;
    }
    },
    beforeDestroy() {
      this.$store.commit('toggleEditPost', false)
    }
}
</script>
