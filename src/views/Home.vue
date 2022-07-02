<template>
  <div class="home">
    <projects-list :projects="projects"></projects-list>
    <users-list :users="users"></users-list>
    <merge-list :mergeRequests="mergeRequests"></merge-list>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue'
import ProjectsList from '@/components/ProjectsList.vue'
import MergeList from '@/components/MergeList.vue'

export default {
  name: 'Home',
  components: {
    UsersList,
    ProjectsList,
    MergeList,
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
