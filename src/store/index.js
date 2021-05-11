<<<<<<< Updated upstream
import Vue from 'vue'
import Vuex from 'vuex'
=======
import Vue from "vue";
import Vuex from "vuex";
import "firebase/auth";
>>>>>>> Stashed changes

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
<<<<<<< Updated upstream
  },
  actions: {
=======
    newBlogPost() {},
    updateBlogTitle() {},
    fileNameChange() {},
    createFileURL() {},
    openPhotoPreview() {},
    toggleEditPost() {},
    setBlogState() {},
    filterBlogPost() {},
    updateUser() {},
    setProfileAdmin() {},
    setProfileInfo() {},
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName() {},
    changeLastName() {},
    changeUsername() {},
  },
  actions: {
    async getCurrentUser() {},
    async getPost() {},
    async deletePost() {},
    async updateUserSettings() {},
>>>>>>> Stashed changes
  },
  modules: {
  }
})
