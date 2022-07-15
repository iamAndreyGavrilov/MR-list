<template>
  <div class="home">
    <div class="home__list">
      <projects-list :projects="projects"></projects-list>
      <merge-list :mergeRequests="mergeRequests"></merge-list>
    </div>

    <users-list :users="users"></users-list>
  </div>
</template>

<script>
import UsersList from "@/components/UsersList.vue";
import ProjectsList from "@/components/ProjectsList.vue";
import MergeList from "@/components/MergeList.vue";

export default {
  name: "Home",
  components: {
    UsersList,
    ProjectsList,
    MergeList,
  },
  data() {
    return {
      projects: [
        { id: 1, name: "Super Pipka 1" },
        { id: 2, name: "Super Bobka 2" },
        { id: 3, name: "Super Dopka 3" },
      ],
      users: [
        {
          id: 1,
          name: "Александр",
        },
        {
          id: 2,
          name: "Алексей",
        },
        {
          id: 3,
          name: "Павел",
        },
      ],

      mergeRequests: [
        {
          title: "Отличный Merge request 1",
          id: 1,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [1, 3],
        },
        {
          title: "Отличный Merge request 11",
          id: 11,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [1, 3],
        },
        {
          title: "Отличный Merge request 111",
          id: 111,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [1, 3],
        },
        {
          title: "Плохой Merge request 2",
          id: 2,
          projectId: 2,
          reviewers: [1, 2, 3],
          liked: [1],
        },
        {
          title: "Плохой Merge request 22",
          id: 22,
          projectId: 2,
          reviewers: [1, 2, 3],
          liked: [1],
        },
        {
          title: "Плохой Merge request 222",
          id: 222,
          projectId: 2,
          reviewers: [1, 2, 3],
          liked: [1],
        },
        {
          title: "Средний Merge request 3",
          id: 3,
          projectId: 3,
          reviewers: [1, 2, 3],
          liked: [3],
        },
        {
          title: "Средний Merge request 33",
          id: 33,
          projectId: 3,
          reviewers: [1, 2, 3],
          liked: [3],
        },
        {
          title: "Средний Merge request 333",
          id: 333,
          projectId: 3,
          reviewers: [1, 2, 3],
          liked: [3],
        },
        {
          title: "Пойдет Merge request 4",
          id: 4,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [2],
        },
        {
          title: "Пойдет Merge request 44",
          id: 44,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [2],
        },
        {
          title: "Пойдет Merge request 444",
          id: 444,
          projectId: 1,
          reviewers: [1, 2, 3],
          liked: [2],
        },
      ],
    };
  },
};
</script>
<style>
.home__list {
  display: flex;
  justify-content: space-around;
}
</style>
