<template>
  <base-material-card :icon="resource.icon" :title="title">
    <va-list

      resource="disciplinas"
        disable-global-search
        disable-pagination
        disable-query-string
        disable-create
        disable-export
        :association="association"
        
      :filters="filters"
    >
      <va-data-table 
          resource="docentes"
          disable-sort
          disable-select
          disable-clone
          disable-delete
          :association="association"
      :fields="fields">
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
       {source:'nome_disciplina',sortable:true},
        {source:'tipo_disciplina',sortable:true},
        {source:'curso'},
        {source:'semestre'},
      ],
      association: {
        resource: "disciplinas",
        source: "id",
        id: this.id,
       
      },
    };
  },
};
</script>
