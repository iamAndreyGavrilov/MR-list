<template>
  <div>
    <p>Список всех пользователей</p>
    <user-item
      class="users"
      v-for="user in users"
      :key="user.id"
      :user="user"
    />
  </div>
</template>

<script>
import UserItem from './UserItem.vue'
export default {
  components: { UserItem },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
