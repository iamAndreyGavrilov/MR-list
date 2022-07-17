<template>
  <div>
    <!-- <div>
      <p>Список всех проектов</p>
      <div class="projects" v-for="project in projects" :key="project.id">
        <strong>{{ project.name }}</strong>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
