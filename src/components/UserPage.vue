<template>
  <h1>Страница пользователя с ID = {{ $route.params.id }}</h1>
  <p>Страница пользователя {{ user.name }}</p>
</template>

<script>
export default {
  //mergeRequests filter includes
  props: {
    users: {
      type: Array,
    },
    mergeRequests: {
      type: Array,
    },
  },
  computed: {
    user() {
      return this.users.find((user) => {
        return user.id === Number(this.$route.params.id)
      })
    },
  },
}
</script>

<style scoped></style>
