<template>
  <va-edit-layout>
    <provas-form :id="id" :title="title" :item="item"></provas-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
