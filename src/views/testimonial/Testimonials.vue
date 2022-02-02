<template>
  <h1 id="head1">Testimonial</h1>
  <div class="skills-header"></div>
  <div class="testimonial" v-if="Testimonials.length">
    <div
      v-for="Testimonials of Testimonials"
      :key="Testimonials.id"
      class="Testimonial"
    >
      <div class="cont">
        <div class="car">
          <div class="imgBx">
            <img :src="Testimonials.img" >
          </div>
          <div class="content">
            <h2>{{ Testimonials.title }}</h2>
            <p>{{ Testimonials.paragraph }}</p>
          </div>
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
.cont {
  position: relative;
  width: 1100px;
    display: inline-block;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 200px;

}
.cont .car {
  position: relative;
  max-width: 300px;
  height: 215px;
  background: #fff;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
}
.cont .car:hover {
  height: 420px;
}
.cont .car .imgBx {
  position: relative;
  width: 260px;
  height: 260px;
  top: -60px;
  left: 20px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}
.cont .car .imgBx img {
  max-width: 100%;
  border-radius: 4px;
}
.cont .car .content {
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}
.cont .car:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -40px;
  transition-delay: 0.3s;
}
</style>
