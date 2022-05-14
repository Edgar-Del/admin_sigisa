<template>
  <va-edit-layout>
    <cursos-form :id="id" :title="title" :item="item"></cursos-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
