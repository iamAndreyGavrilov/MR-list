<template>
  <h1>Страница пользователя с ID = {{ $route.params.id }}</h1>
  <p>Страница пользователя {{ user.name }}</p>

  <!-- <p>{{ users }}</p> -->
  <!-- <p>{{ mergeRequests }}</p> -->
  <!-- <p>{{ mergeRequest }}</p> -->
  <!-- <p>{{ mrLike }}</p> -->
  <p>{{ user.name }} лайкнул:</p>
  <p v-for="m in mrLike" :key="m.id">{{ m.title }}</p>

  <!-- <p v-for="mr in mergeRequests" :key="mr.id">{{ mr.title }} {{ mr.id }}</p> -->
</template>

<script>
export default {
  data() {
    return {
      // mergeRequest: [],
    }
  },
  methods: {
    // foo() {},
  },
  //mergeRequests filter includes
  props: {
    users: {
      type: Array,
    },
    mergeRequests: {
      type: Array,
    },
  },
  mounted() {
    // this.foo()
  },
  computed: {
    user() {
      return this.users.find((user) => {
        return user.id === Number(this.$route.params.id)
      })
    },

    mrLike() {
      return this.mergeRequests.filter((mere) => {
        return mere.liked.includes(this.user.id)
      })
    },

    // mr() {
    //   return this.mergeRequests.map((mr) => {
    //     return mr.liked.filter((like) => {
    //       return like === this.user.id
    //     })
    //   })
    // },

    // mr2() {
    //   return this.mergeRequests.forEach((mr) => {
    //     return this.mergeRequestId.push(mr.liked.filter((like) => {
    //       return like === this.user.id
    //     }))
    //   })
    // },
  },
}
</script>

<style scoped></style>
