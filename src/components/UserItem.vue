<template>
  <div class="user">
    <div>
      <strong>{{ user.name }}</strong>
    </div>
    <!-- <div class="btn">
      <button @click="$router.push(`/users/${user.id}`)">Открыть</button>
    </div> -->
    <div class="btn">
      <button v-show="!openUserInformation" @click="openUser">Открыть</button>
      <button class="close" v-show="openUserInformation" @click="openUser">
        Закрыть
      </button>
    </div>
  </div>
  <transition name="slide-fade">
    <div class="page" v-show="openUserInformation">
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
  </transition>
</template>

<script>
export default {
  data() {
    return {
      userProjects: [],
      openUserInformation: false,
      // projMrs: [],
    };
  },
  methods: {
    openUser() {
      this.openUserInformation = !this.openUserInformation;
    },
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
.close {
  border: 2px solid #eb1616;
}
.page {
  display: flex;
  justify-content: space-around;
  border: 1px solid #64766a;
}
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
