<template>
  <base-material-card :icon="resource.icon" :title="title">
    <va-list
      :filters="filters"
    >
      <va-data-table :fields="fields">
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
      fields: [{source:'semestre',sortable:true},
      {source:'data_inicio',sortable:true},
      {source:'data_fim',sortable:true},
      {source:'ano_letivo'},
      ],
    };
  },
};
</script>
