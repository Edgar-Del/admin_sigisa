<template>
  <va-edit-layout>
    <departamento-form :id="id" :title="title" :item="item"></departamento-form>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
