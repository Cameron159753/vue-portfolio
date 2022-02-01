<template>
    <div v-if="Projects">
        <h1>{{Projects.img}}</h1>
        <h1>{{Projects.title}}</h1>
    </div>
    <div v-else>
        <p>Loading project data...</p>
    </div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            Projects: null,
        };
    },
    mounted() {
        fetch("http://localhost:3000/Projects/" + this.id)
        .then((res) => res.json())
        .then((data) => {
            this.Projects = data;
            console.log(data);
        })
        .catch((err) => console.log(err.message));
    },
};
</script>