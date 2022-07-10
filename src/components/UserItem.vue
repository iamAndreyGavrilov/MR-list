<template>
  <div class="user">
    <div>
      <strong>{{ user.name }}</strong>
    </div>
    <div class="btn">
      <button @click="$router.push(`/users/${user.id}`)">Открыть</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.user {
  padding: 15px;
  border: 2px solid #64766a;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  padding: 10px 15px;
  color: #64766a;
  border: 2px solid #64766a;
  cursor: pointer;
}
</style>
