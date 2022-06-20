<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create Your FireBlogs Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName">
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName">
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username">
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email">
          <email class="icon" />
        </div>        
        <div class="input">
          <input type="password" placeholder="Password" v-model="password">
          <password class="icon" />
        </div>
      </div>
      <button>Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg"
import password from "../assets/Icons/lock-alt-solid.svg"
import user from "../assets/Icons/user-alt-light.svg"
export default {
  name: "Register",
  components: {
    email,
    password,
    user,
  }, 
  data() {
    return {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      password: null,
    };
  },
  


}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>