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
      filters: [
        {label:'ESTUDANTE',source:'estudante.nome_completo',sortable:true},
        {label:'CURSO',source:'curso.nome_curso',sortable:true},
        {label:'PERIODO',source:'periodo.nome_periodo'},
        {label:'DATA DE MATRICULA',source:'data_matricula',sortable:true},
      ],
      fields: [
        {label:'ESTUDANTE',source:'estudante.nome_completo',sortable:true},
        {label:'CURSO',source:'curso.nome_curso',sortable:true},
        {label:'PERIODO',source:'periodo.nome_periodo'},
        {label:'DATA DE MATRICULA',source:'data_matricula',sortable:true},
      ],
    };
  },
};
</script>
