<template>
  <va-edit-layout>
    <graus-form :id="id" :title="title" :item="item"></graus-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
