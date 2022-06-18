<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />

        </div>
      </div>
    </div>
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import BlogCards from '../components/BlogCard.vue'
export default {
  name: "Home",
  components: { BlogPost, BlogCards },
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
      ], 
      sampleBlogCards: [
        { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "June 18, 2022"},
        { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "June 18, 2022"},
        { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "June 18, 2022"},
        { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "June 18, 2022"},
      ],
    }
  }
};
</script>

<style lang="scss" scoped>

.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;

  }
}

</style>