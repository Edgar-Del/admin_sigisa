<template>
  <va-create-layout>
    <periodo-form :title="title" :item="item"></periodo-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
