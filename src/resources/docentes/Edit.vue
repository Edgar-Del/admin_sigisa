<template>
  <va-edit-layout>
    <docentes-form :id="id" :title="title" :item="item"></docentes-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
