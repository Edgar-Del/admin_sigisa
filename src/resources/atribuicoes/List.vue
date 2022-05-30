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
        {label:'DISCIPLINA',source:'disciplina.nome_disciplina',sortable:true},
        {label:'DOCENTE',source:'docente.nome_completo',sortable:true},
        {label:'CURSO',source:'curso.nome_curso',sortable:true},
        {label:'TURMA',source:'turma.nome_turma',sortable:true},

      ],
    };
  },
};
</script>
