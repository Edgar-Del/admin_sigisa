<template>
  <va-edit-layout>
    <estudantes-form :id="id" :title="title" :item="item"></estudantes-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
