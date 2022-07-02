<template>
  <div>
    <p>Список проектов</p>
    <div class="projects" v-for="project in projects" :key="project.id">
      <strong>{{ project.name }}</strong>
    </div>
  </div>
  <div>
    <p>Список пользователей</p>
    <div class="users" v-for="user in users" :key="user.id" :user="user">
      <strong>{{ user.name }}</strong>

      <button @click="$router.push(`/users/${user.id}`)">Открыть</button>
    </div>
  </div>

  <div></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    projects: {
      type: Array,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
