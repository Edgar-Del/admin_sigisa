<template>
  <va-edit-layout>
    <matriculas-form :id="id" :title="title" :item="item"></matriculas-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
