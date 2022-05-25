<template>
  <va-create-layout>
    <situacao-laboral-form :title="title" :item="item"></situacao-laboral-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
