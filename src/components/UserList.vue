<template>
  <h1>Страница пользователя с ID = {{ $route.params.id }}</h1>
  <h1>Страница пользователя {{ $route.params }}</h1>
</template>

<script>
export default {
  props: {
    // user: {
    //   type: Object,
    //   required: true,
    // },
  },
  data() {
    return {}
  },
}
</script>

<style scoped></style>
