<template>
  <h1>Страница пользователя {{ user.name }} с ID = {{ $route.params.id }}</h1>
  <div class="page">
    <div>
      <p>В проектах</p>
      <p v-for="r in userProjects" :key="r.id">{{ r.name }}</p>
    </div>
    <div>
      <p>{{ user.name }} не лайкнул:</p>
      <p v-for="mr in noLikeMr" :key="mr.id">{{ mr.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userProjects: [],
      // projMrs: [],
    }
  },
  methods: {
    projNames() {
      const arrProjectsNames = this.noLikeMr.flatMap((item2) => {
        const currentProjectId = this.projects.filter(
          (item1) => item1['id'] === item2['projectId']
        )
        // console.log(currentProjectId)
        return currentProjectId
      })
      // console.log(arrProjectsNames)
      return this.userProjects.push(...arrProjectsNames)
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
    this.projNames()
  },

  computed: {
    user() {
      return this.users.find((user) => {
        return user.id === Number(this.$route.params.id)
      })
    },

    noLikeMr() {
      return this.mergeRequests.filter((mere) => {
        return !mere.liked.includes(this.user.id)
      })
    },
  },
}
</script>

<style scoped>
.page {
  display: flex;
  justify-content: space-around;
}
</style>
