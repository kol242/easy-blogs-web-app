<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in blogPostsFeed" :key="index" />
    <div v-if="blogPostsCards.length > 0" class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in blogPostsCards" :key="index" />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
        <div class="container">
            <h2>You wan't to leave post? Register for your free account today.</h2>
            <router-link class="router-button" :to="{ name: 'Register' }">
                Register for EasyBlogs
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import BlogCard from '../components/BlogCard.vue'
import '../assets/style/views/Home.scss'
export default {
  name: "Home",
  components: {BlogPost, BlogCard},
  data() {
    return {
       welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Blog articles about programming, new technologies, softwares and much more! Register now for new posts every week!",
        welcomeScreen: true,
        photo: "coding",
      },
    }
  },
  computed: {
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed
    },
    blogPostsCards() {
      return this.$store.getters.blogPostsCards
    },
    user() {
      return this.$store.state.user;
    },
  }
};
</script>
