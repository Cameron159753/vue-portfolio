<template>
  <h1 id="head1">Projects</h1>
   <div class="skills-header">
       
     </div>
  <div class="projects" v-if="Projects.length">
    <div v-for="Project of Projects" :key="Project.id" class="Project">
      <div class="card2">
        <img :src="Project.img" alt="Avatar" style="width: 100%" />
        <div class="container2">
          <h4>
            <b>{{ Project.title }}</b>
            <button><a :href="Project.github">github</a></button>
            <button><a :href="Project.netlify">netlify</a></button>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading Projects...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Projects/")
      .then((res) => res.json())
      .then((data) => (this.Projects = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.card2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card2:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container2 {
  padding: 2px 16px;
}
</style>
