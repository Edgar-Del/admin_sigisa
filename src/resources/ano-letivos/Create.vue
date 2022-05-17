<template>
  <va-create-layout>
    <ano-letivos-form :title="title" :item="item"></ano-letivos-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
