<template>
  <va-edit-layout>
    <grau-academicos-form :id="id" :title="title" :item="item"></grau-academicos-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
