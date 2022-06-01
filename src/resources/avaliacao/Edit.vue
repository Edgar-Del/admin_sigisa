<template>
  <va-edit-layout>
    <avaliacao-form :id="id" :title="title" :item="item"></avaliacao-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
