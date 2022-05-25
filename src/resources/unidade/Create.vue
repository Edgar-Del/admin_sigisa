<template>
  <va-create-layout>
    <unidade-form :title="title" :item="item"></unidade-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
