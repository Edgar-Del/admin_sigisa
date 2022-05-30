<template>
  <va-edit-layout>
    <atribuicoes-form :id="id" :title="title" :item="item"></atribuicoes-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
