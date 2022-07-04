<template>
  <h1>Страница пользователя с ID = {{ $route.params.id }}</h1>
  <p>Страница пользователя {{ user.name }}</p>

  <p>1 - {{ mr }}</p>
  <p>2 - {{ mr2 }}</p>
  <p>3 - {{ mergeRequestId }}</p>
</template>

<script>
export default {
  data() {
    return {
      mergeRequestId: [],
    }
  },
  methods: {},
  //mergeRequests filter includes
  props: {
    users: {
      type: Array,
    },
    mergeRequests: {
      type: Array,
    },
  },
  mounted() {},
  computed: {
    user() {
      return this.users.find((user) => {
        return user.id === Number(this.$route.params.id)
      })
    },
    mr() {
      return this.mergeRequests.map((mr) => {
        return mr.liked.filter((like) => {
          return like === this.user.id
        })
      })
    },

    mr2() {
      return this.mergeRequests.forEach((mr) => {
        return this.mergeRequestId.push(mr.liked.filter((like) => {
          return like === this.user.id
        }))
      })
    },
  },
}
</script>

<style scoped></style>
