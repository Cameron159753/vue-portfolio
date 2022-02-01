import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Timeline from "../views/Timeline.vue";
import Project from "../views/project/Project.vue";
import Contact from "../views/Contact.vue";
import ProjectDetails from "../views/project/ProjectDetails.vue";
import Testimonials from "../views/testimonial/Testimonials.vue";
import TestimonialDetails from "../views/testimonial/TestimonialDetails.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline,
  },
  {
    path: "/Project",
    name: "Project",
    component: Project,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/Project/:id",
    name: "ProjectDetails",
    component: ProjectDetails,
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component: Testimonials,
  },
  {
    path: "/Testimonial/:id",
    name: "TestimonialDetails",
    component: TestimonialDetails,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
