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
        {source:'id',sortable:true},
        {source:'estudante',sortable:true},
        {source:'curso',sortable:true},
        {source:'unidade'},
        {source:'periodo'},
        {source:'data_matricula',sortable:true},
      ],
    };
  },
};
</script>
