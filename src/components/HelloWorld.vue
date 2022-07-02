<template>
  <div>
    <p>Список проектов</p>
    <div class="projects" v-for="project in projects" :key="project.id">
      <strong>{{ project.name }}</strong>
    </div>
  </div>
  <div>
    <p>Список пользователей</p>
    <div class="users" v-for="user in users" :key="user.id" :user="user">
      <strong>{{ user.name }}</strong>

      <button @click="$router.push(`/users/${user.id}`)">Открыть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
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

<style scoped></style>
