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
        {label:'ESTUDANTE',source:'estudante',sortable:true},
        {label:'CURSO',source:'curso',sortable:true},
        {label:'PERIODO',source:'periodo'},
        {label:'DATA DE MATRICULA',source:'data_matricula',sortable:true},
      ],
    };
  },
};
</script>
