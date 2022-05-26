<template>
  <va-create-layout>
    <notas-form :title="title" :item="item"></notas-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
