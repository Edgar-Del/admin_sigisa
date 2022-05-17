<template>
  <va-create-layout>
    <turmas-form :title="title" :item="item"></turmas-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
