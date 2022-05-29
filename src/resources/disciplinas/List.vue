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
        {label:'DISCIPLINA',source:'nome_disciplina',sortable:true},
        {label:'TIPO DISCIPLINA',source:'tipo_disciplina',sortable:true},
        {label:'CURSO',source:'curso.nome_curso'},
        {label:'ANO ACADÉMICO',source:'ano_academico.ano_academico'},
        {label:'SEMESTRE',source:'semestre.semestre'},
      ],
    };
  },
};
</script>
