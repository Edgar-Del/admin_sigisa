<template>
  <base-material-card :icon="resource.icon" :title="title">
    <va-list
      :filters="filters"
    >
      <va-data-table disable-clone :fields="fields">
      </va-data-table>
    </va-list>
  </base-material-card>
</template>

<script>
export default {
  props: ["resource", "title"],
  data() {
    return {
      filters: [],
      fields: [
{source:'prova', sortable:true},
{source:'disciplina', sortable:true},
{source:'curso', sortable:true},
{source:'ano', sortable:true},

      ],
    };
  },
};
</script>
