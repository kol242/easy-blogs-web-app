<template>
    <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.blogTitle }}</h2>
      <img :src="blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="blogHTML"></div>
    </div>
  </div>
</template>

<script>
import '../assets/style/views/BlogPreview.scss'
export default {
    name: 'PostPreview',
    computed: {
        blogTitle() {
            return this.$store.state.blogTitle
        },
        blogHTML() {
            return this.$store.state.blogHTML
        },
        blogCoverPhoto() {
            return this.$store.state.blogPhotoFileURL
        },
    }
}
</script>

<style lang="scss">

</style>