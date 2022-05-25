<template>
  <va-create-layout>
    <matriculas-form :title="title" :item="item"></matriculas-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
