<template>
  <div>
    <p>Список всех пользователей</p>
    <div class="users" v-for="user in users" :key="user.id" :user="user">
      <strong>{{ user.name }}</strong>
      <button @click="$router.push(`/users/${user.id}`)">Открыть</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
