<template>
  <va-edit-layout>
    <notas-form :id="id" :title="title" :item="item"></notas-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
