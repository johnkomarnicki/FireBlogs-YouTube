<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: 
          "Weekly blog articles with all things programming including HTML, CSS, Javascript and more.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a filler Title",
          blogHTML: "This is a filler blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a filler Title2",
          blogHTML: "This is a filler blog post title2",
          blogCoverPhoto: "designed-for-everyone",
        }
      ]
    }
  }
};
</script>
