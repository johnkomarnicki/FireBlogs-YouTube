import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
<<<<<<< Updated upstream
=======
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
>>>>>>> Stashed changes
});

export default router;
