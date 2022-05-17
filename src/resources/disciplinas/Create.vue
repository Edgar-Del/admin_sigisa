<template>
  <va-create-layout>
    <disciplinas-form :title="title" :item="item"></disciplinas-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
