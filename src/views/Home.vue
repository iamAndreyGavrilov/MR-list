<template>
  <div class="home">
    <hello-world :projects="projects" :users="users" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      projects: [
        { id: 1, name: 'Super Pipka' },
        { id: 2, name: 'Super Bobka' },
        { id: 3, name: 'Super Dopka' },
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
          title: 'Merge request 1',
          id: 1,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [1, 3],
        },
        {
          title: 'Merge request 2',
          id: 2,
          projectId: 2,
          reviewers: [1, 2, 3],
          liked: [1],
        },
        {
          title: 'Merge request 3',
          id: 3,
          projectId: 3,
          reviewers: [1, 2, 3],
          liked: [3],
        },
        {
          title: 'Merge request 4',
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
