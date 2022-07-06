<template>
  <h1>Страница пользователя с ID = {{ $route.params.id }}</h1>
  <p>Страница пользователя {{ user.name }}</p>

  <p>{{ user.name }} не лайкнул:</p>
  <p v-for="m in noLike" :key="m.id">{{ m.title }}</p>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},

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

    noLike() {
      return this.mergeRequests.filter((mere) => {
        return !mere.liked.includes(this.user.id)
      })
    },
  },
}
</script>

<style scoped></style>
