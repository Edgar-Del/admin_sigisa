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
        {lable:'TURMA',source:'turma',sortable:true},
        {label:'SEMESTRE',source:'semestre.semestre'},
        {label:'ANO ACADÉMICO',source:'ano_academico.ano_academico'},
        {label:'PERIODO',source:'periodo.nome_periodo'},
      ],
    };
  },
};
</script>
