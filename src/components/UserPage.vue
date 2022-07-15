<template>
  <h1>Страница пользователя {{ user.name }} с ID = {{ $route.params.id }}</h1>
  <div class="page">
    <div>
      <p>В проектах</p>
      <p v-for="project in userProjects" :key="project.id">
        {{ project.name }}
        <span
          style="display: block"
          v-for="mr in getMrByProject(project.id)"
          :key="mr.id"
        >
          {{ mr.title }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userProjects: [],
      // projMrs: [],
    };
  },
  methods: {
    getMrByProject(projectId) {
      return this.noLikeMrs.filter((mr) => mr.projectId === projectId);
    },

    projNames() {
      const arrProjectsNames = this.noLikeMrs.flatMap((item2) => {
        const currentProjectId = this.projects.filter(
          (item1) => item1["id"] === item2["projectId"]
        );
        return currentProjectId;
      });

      // arrProjectsNames.forEach((project) => {
      //   project.unlikedMRs = this.getMrByProject(project.id);
      // });

      return this.userProjects.push(...new Set(arrProjectsNames));
    },
  },

  props: {
    users: {
      type: Array,
    },
    mergeRequests: {
      type: Array,
    },
    projects: {
      type: Array,
    },
  },

  mounted() {
    this.projNames();
  },

  computed: {
    user() {
      return this.users.find((user) => {
        return user.id === Number(this.$route.params.id);
      });
    },

    noLikeMrs() {
      return this.mergeRequests.filter((mere) => {
        return !mere.liked.includes(this.user.id);
      });
    },
  },
};
</script>

<style scoped>
.page {
  display: flex;
  justify-content: space-around;
}
</style>
