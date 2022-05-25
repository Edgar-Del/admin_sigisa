<template>
  <va-create-layout>
    <estado-civil-form :title="title" :item="item"></estado-civil-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
