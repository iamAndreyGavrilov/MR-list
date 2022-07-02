<template>
  <div>
    <user-list />
    <p>user id page</p>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'

export default {
  name: 'UserIdPage',
  components: {
    UserList,
  },
  data() {
    return {}
  },
}
</script>
