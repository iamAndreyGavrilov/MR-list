<template>
  <div>
    <user-page
      :projects="projects"
      :users="users"
      :mergeRequests="mergeRequests"
    />
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
      projects: [
        { id: 1, name: 'Super Pipka 1' },
        { id: 2, name: 'Super Bobka 2' },
        { id: 3, name: 'Super Dopka 3' },
      ],

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
          title: 'Отличный Merge request 1',
          id: 1,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [1, 3],
        },
        {
          title: 'Плохой Merge request 2',
          id: 2,
          projectId: 2,
          reviewers: [1, 2, 3],
          liked: [1],
        },
        {
          title: 'Средний Merge request 3',
          id: 3,
          projectId: 3,
          reviewers: [1, 2, 3],
          liked: [3],
        },
        {
          title: 'Пойдет Merge request 4',
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
