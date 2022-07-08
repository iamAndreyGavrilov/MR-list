<template>
  <h1>Страница пользователя {{ user.name }} с ID = {{ $route.params.id }}</h1>

  <p>{{ user.name }} не лайкнул:</p>

  <p v-for="mr in noLikeMr" :key="mr.id">{{ mr.title }}</p>

  <p>{{ res }}</p>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    projName() {
      const res = this.noLikeMr.flatMap((item2) => {
        const currentId = this.projects.filter(
          (item1) => item1['id'] === item2['projectId']
        )
        console.log(currentId)
        return currentId
      })
      console.log(res)
      return res
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
    this.projName()
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

    // projId() {
    //   return this.projects.flatMap((proj) => {
    //     return proj.id
    //   })
    // },

    // mrProjectId() {
    //   return this.mergeRequests.flatMap((mr) => {
    //     return mr.projectId
    //   })
    // },
  },
}
</script>

<style scoped></style>
