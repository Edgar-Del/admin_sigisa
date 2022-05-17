<template>
  <va-edit-layout>
    <semestres-form :id="id" :title="title" :item="item"></semestres-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
