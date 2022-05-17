<template>
  <va-create-layout>
    <docentes-form :title="title" :item="item"></docentes-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
