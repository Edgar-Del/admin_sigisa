<template>
  <va-create-layout>
    <departamento-form :title="title" :item="item"></departamento-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
