<template>
 <div class="blog-card">
    <div v-show="editPost" class="icons">
      <div @click="editBlog" class="icon">
        <Edit class="edit" />
      </div>
      <div @click="deletePost" class="icon">
        <Delete class="delete" />
      </div>
    </div>
    <img :src="post.blogCoverPhoto" alt="" />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>Posted on: <span style="font-weight: bold;">{{ new Date(post.blogDate).toLocaleString('en-us', { dateStyle: 'long' }) }}</span></h6>
      <h6>By: <span style="font-weight: bold;">{{ post.blogAuthor }}</span></h6>
      <router-link class="link" :to="{ name: 'ViewBlog', params: {blogid: this.post.blogID} }">
        View The Post <Arrow class="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";
import '../assets/style/BlogCard.scss'
export default {
    name: 'blogCard',
    props: ['post'],
    components: {
        Arrow,
        Edit,
        Delete 
    },
    methods: {
      deletePost() {
        this.$store.dispatch('deletePost', this.post.blogID)
      },
      editBlog() {
        this.$router.push({ name: 'EditBlog', params: { blogid: this.post.blogID } })
      }
    },
    computed: {
      editPost() {
        return this.$store.state.editPost
      }
    }
}
</script>
