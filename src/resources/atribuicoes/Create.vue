<template>
  <va-create-layout>
    <atribuicoes-form :title="title" :item="item"></atribuicoes-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
