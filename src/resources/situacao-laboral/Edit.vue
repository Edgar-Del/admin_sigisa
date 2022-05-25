<template>
  <va-edit-layout>
    <situacao-laboral-form :id="id" :title="title" :item="item"></situacao-laboral-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
