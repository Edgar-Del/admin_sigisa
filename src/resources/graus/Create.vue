<template>
  <va-create-layout>
    <graus-form :title="title" :item="item"></graus-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
