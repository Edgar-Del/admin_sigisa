<template>
  <va-create-layout>
    <confirmacao-matriculas-form :title="title" :item="item"></confirmacao-matriculas-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
