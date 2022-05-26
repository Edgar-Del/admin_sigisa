<template>
  <va-create-layout>
    <provas-form :title="title" :item="item"></provas-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
