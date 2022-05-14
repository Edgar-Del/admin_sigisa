<template>
  <va-create-layout>
    <cursos-form :title="title" :item="item"></cursos-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
