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
      filters: [
        {label:'NOME',source:'nome_completo',sortable:true},
        {label:'NÚM IDENTIFICAÇÃO',source:'num_identificacao',sortable:true},
        {label:'MORADA',source:'morada',sortable:true},
        {label:'GRAU ACADÉMICO',source:'grau_academico.grau_academico',sortable:true},
      ],
      fields: [
        {label:'NOME COMPLETO',source:'nome_completo',sortable:true},
        {label:'NÚM IDENTIFICAÇÃO',source:'num_identificacao',sortable:true},
        {label:'MORADA',source:'morada',sortable:true},
        {label:'TELEFONE',source:'telefone',sortable:true},
        {label:'EMAIL',source:'email',sortable:true, type:'email'},
        {label:'GRAU ACADÉMICO',source:'grau_academico.grau_academico',sortable:true},
      ],
    };
  },
};
</script>
