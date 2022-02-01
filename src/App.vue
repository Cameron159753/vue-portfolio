<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <i class="fa fa-user" style="font-size:24px"></i> <router-link :to="{ name: 'About' }">About</router-link> 
    <router-link :to="{ name: 'Timeline' }">Timeline</router-link> |
    <router-link :to="{ name: 'Project' }">Project</router-link> |
    <router-link :to="{ name: 'Testimonials' }">Testimonial</router-link> |
    <router-link :to="{ name: 'Contact' }">Contact</router-link> 
  </div>
  <router-view />
  
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: white;
}

#nav {
  padding: 30px;
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  font-family: "Lato", sans-serif;
  /* background-color: #111; */
}

#nav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

#nav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

#nav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav /
  font-size: 28px; / Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
