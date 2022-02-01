<template>
    <div v-if="Testimonials">
        <h1>{{Testimonials.image}}</h1>
        <h1>{{Testimonials.name}}</h1>
    </div>
    <div v-else>
        <p>Loading data...</p>
    </div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            Testimonials: null,
        };
    },
    mounted() {
        fetch("http://localhost:3000/Testimonials/" + this.id)
        .then((res) => res.json())
        .then((data) => {
            this.Testimonials = data;
            console.log(data);
        })
        .catch((err) => console.log(err.message));
    },
};
</script>