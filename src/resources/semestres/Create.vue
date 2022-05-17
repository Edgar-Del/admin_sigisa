<template>
  <va-create-layout>
    <semestres-form :title="title" :item="item"></semestres-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
