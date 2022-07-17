<template>
  <div>
    <!-- <div>
      <p>Список всех MR</p>
      <div
        class="mergeRequest"
        v-for="mergeRequest in mergeRequests"
        :key="mergeRequest.id"
      >
        <strong>{{ mergeRequest.title }}</strong>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    mergeRequests: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
