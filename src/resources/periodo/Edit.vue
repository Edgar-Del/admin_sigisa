<template>
  <va-edit-layout>
    <periodo-form :id="id" :title="title" :item="item"></periodo-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
