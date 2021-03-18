import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import SemestersIndex from "../views/SemestersIndex.vue";
import ShiftsNew from "../views/ShiftsNew.vue";
import ShiftsIndex from "../views/ShiftsIndex.vue";
import SemestersShow from "../views/SemestersShow.vue";
import SchedulesShow from "../views/SchedulesShow.vue";
import SemestersNew from "../views/SemestersNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/semesters", name: "semesters-index", component: SemestersIndex },
  { path: "/semesters/:id/shifts/new", name: "shifts-new", component: ShiftsNew },
  { path: "/shifts", name: "shifts-index", component: ShiftsIndex },
  { path: "/semesters/new", name: "semesters-new", component: SemestersNew },
  { path: "/semesters/:id", name: "semesters-show", component: SemestersShow },
  { path: "/semesters/:id/schedules", name: "shedules-show", component: SchedulesShow },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
