<template>
  <va-create-layout>
    <grau-academicos-form :title="title" :item="item"></grau-academicos-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
