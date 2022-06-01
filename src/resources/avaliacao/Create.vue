<template>
  <va-create-layout>
    <avaliacao-form :title="title" :item="item"></avaliacao-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
