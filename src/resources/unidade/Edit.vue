<template>
  <va-edit-layout>
    <unidade-form :id="id" :title="title" :item="item"></unidade-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
