<template>
  <va-edit-layout>
    <ano-letivos-form :id="id" :title="title" :item="item"></ano-letivos-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
