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
      fields: [{source:'ano_academico',sortable:true},
      {source:'curso'},
      {source:'grau'},
      {source:'ano_letivo'},
      
      ],
    };
  },
};
</script>
