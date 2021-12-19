<template>
  <div class="post-view" v-if="currentBlog">
    <div class="container quillWrapper">
      <h2>{{ this.currentBlog[0].blogTitle }}</h2>
      <h4>Posted on: <span style="font-weight: bold;">{{ new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", { dateStyle: "long" }) }}</span></h4>
      <h4>By: <span style="font-weight: bold;">{{ this.currentBlog[0].blogAuthor }}</span></h4>
      <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
    </div>
  </div>
</template>

<script>
import '../assets/style/views/ViewBlog.scss'
export default {
  name: 'ViewBlog',
  data() {
    return {
      currentBlog: null
    }
  },
  async mounted() {
    this.currentBlog = await this.$store.state.blogPosts.filter((post) => {
      return post.blogID === this.$route.params.blogid
    })
  }
}
</script>
