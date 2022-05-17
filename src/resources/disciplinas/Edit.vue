<template>
  <va-edit-layout>
    <disciplinas-form :id="id" :title="title" :item="item"></disciplinas-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
