<template>
  <va-create-layout>
    <estudantes-form :title="title" :item="item"></estudantes-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
