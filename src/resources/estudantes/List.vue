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
      fields: [
        {source:'nome_completo', sortable:true},
        {source:'num_identificacao', sortable:true},
        {source:'morada', sortable:true},
        {source:'telefone', sortable:true},
        {source:'escola_proveniencia'},
        {source:'curso_proveniencia', sortable:true},


      ],
    };
  },
};
</script>
