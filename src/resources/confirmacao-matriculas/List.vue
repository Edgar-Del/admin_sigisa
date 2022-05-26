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
        {source:'matricula.estudante',sortable:true},
        {source:'matricula.curso',sortable:true},
        {source:'matricula.periodo',sortable:true},
        {source:'semestre',},
        {source:'ano_academico',sortable:true},
        {source:'turma',sortable:true},
      ],
    };
  },
};
</script>
