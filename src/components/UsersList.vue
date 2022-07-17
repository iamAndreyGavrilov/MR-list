<template>
  <div>
    <p>Список всех пользователей</p>
    <user-item
      class="users"
      v-for="user in users"
      :key="user.id"
      :user="user"
      :users="users"
      :projects="projects"
      :mergeRequests="mergeRequests"
    />
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
  components: { UserItem },
  props: {
    users: {
      type: Array,
      required: true,
    },
    mergeRequests: {
      type: Array,
    },
    projects: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>
