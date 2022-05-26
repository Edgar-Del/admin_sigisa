<template>
  <va-edit-layout>
    <confirmacao-matriculas-form :id="id" :title="title" :item="item"></confirmacao-matriculas-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
