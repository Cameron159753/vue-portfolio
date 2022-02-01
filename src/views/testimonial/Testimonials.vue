<template>
  <h1>Testimonial</h1>
  <div class="testimonial" v-if="Testimonials.length">
    <div v-for="Testimonials of Testimonials" :key="Testimonials.id" class="Testimonial">
      <div class="card1">
        <img :src="Testimonials.image" alt="Avatar" style="width: 100%" />
        <div class="container2">
          <h4>
            <b>{{ Testimonials.name }}</b>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Testimonials: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Testimonials/")
      .then((res) => res.json())
      .then((data) => (this.Testimonials = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.card1 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card1:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container2 {
  padding: 2px 16px;
}
</style>
