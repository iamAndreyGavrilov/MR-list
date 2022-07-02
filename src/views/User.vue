<template>
  <div>
    <user-page :users="users" :mergeRequests="mergeRequests" />
    <p>user id page</p>
  </div>
</template>

<script>
import UserPage from '@/components/UserPage.vue'

export default {
  name: 'User',
  components: {
    UserPage,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Александр',
        },
        {
          id: 2,
          name: 'Алексей',
        },
        {
          id: 3,
          name: 'Павел',
        },
      ],
      mergeRequests: [
        {
          title: 'Название Merge request 1',
          id: 1,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [1, 3],
        },
        {
          title: 'Название Merge request 2',
          id: 2,
          projectId: 2,
          reviewers: [1, 2, 3],
          liked: [1],
        },
        {
          title: 'Название Merge request 3',
          id: 3,
          projectId: 3,
          reviewers: [1, 2, 3],
          liked: [3],
        },
        {
          title: 'Название Merge request 4',
          id: 4,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [2],
        },
      ],
    }
  },
}
</script>
