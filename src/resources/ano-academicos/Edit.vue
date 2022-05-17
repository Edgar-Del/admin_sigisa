<template>
  <va-edit-layout>
    <ano-academicos-form :id="id" :title="title" :item="item"></ano-academicos-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
