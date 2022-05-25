<template>
  <va-edit-layout>
    <estado-civil-form :id="id" :title="title" :item="item"></estado-civil-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
