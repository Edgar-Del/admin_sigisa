<template>
  <va-edit-layout>
    <turmas-form :id="id" :title="title" :item="item"></turmas-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
