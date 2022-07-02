<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      Projects: [
        { id: 1, name: "Pipka" },
        { id: 2, name: "Bobka" },
        { id: 3, name: "Dopka" },
      ],
      users: [
        {
          id: 1,
          name: "Vasya",
        },
        {
          id: 2,
          name: "Petya",
        },
        {
          id: 3,
          name: "Dosya",
        },
      ],
      MRs: [
        {
          title: "lorem1",
          id: 1,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [1, 3],
        },
        {
          title: "lorem2",
          id: 2,
          projectId: 2,
          reviewers: [1, 2, 3],
          liked: [1],
        },
        {
          title: "lorem3",
          id: 3,
          projectId: 3,
          reviewers: [1, 2, 3],
          liked: [3],
        },
        {
          title: "lorem4",
          id: 4,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [2],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
