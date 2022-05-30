<template>
  <base-material-card :icon="resource.icon" :title="title">
    <va-list 
      :filters="filters"
    >
      <va-data-table  :fields="fields">
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
        {
          label: "CURSO",
          source: "nome_curso",
        },
        {
          label: "DEPARTAMENTO",
          source: "departamento.nome_departamento",
        },
        ],
      fields: [
        {label:'CURSO',source:'nome_curso',sortable: true},
        {label:'NÍVEL',source:'grau.grau'},
        {label:'DEPARTAMENTO',source:'departamento.nome_departamento'},
      ],
    };
  },
};
</script>
