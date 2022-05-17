<template>
  <va-create-layout>
    <ano-academicos-form :title="title" :item="item"></ano-academicos-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
