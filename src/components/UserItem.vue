<template>
  <div class="user">
    <div>
      <strong>{{ user.name }}</strong>
    </div>
    <!-- <div class="btn">
      <button @click="$router.push(`/users/${user.id}`)">Открыть</button>
    </div> -->
  </div>
  <div class="page">
    <div>
      <p>В проектах, не просмотрено</p>
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
    user: {
      type: Object,
      required: true,
    },
    users: {
      type: Array,
      required: true,
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
    // user() {
    //   return this.users.find((user) => {
    //     return user.id === Number(this.user.id);
    //   });
    // },

    noLikeMrs() {
      return this.mergeRequests.filter((mere) => {
        return !mere.liked.includes(this.user.id);
      });
    },
  },
};
</script>

<style scoped>
.user {
  padding: 15px;
  border: 2px solid #64766a;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  padding: 10px 15px;
  color: #64766a;
  border: 2px solid #64766a;
  cursor: pointer;
}
.page {
  display: flex;
  justify-content: space-around;
}
</style>
