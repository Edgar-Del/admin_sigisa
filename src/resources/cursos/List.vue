<template>
  <div>
    <va-aside-layout :title="asideTitle">
      <cursos-show v-if="show" :item="item"></cursos-show>
      <cursos-form v-else :id="id" :item="item" @saved="onSaved"></cursos-form>
    </va-aside-layout>
    <base-material-card :icon="resource.icon" :title="title">
      <va-list  ref="list" disable-create-redirect :filters="filters" @action="onAction">
        <va-data-table
          :fields="fields"
          disable-create-redirect
          disable-show-redirect
          disable-edit-redirect
          @item-action="onAction"
        >
        </va-data-table>
      </va-list>
    </base-material-card>
  </div>
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
        {
          label: "NÍVEL",
          source: "grau.grau",
        },
        ],
      fields: [
        {label:'CURSO',source:'nome_curso',sortable: true},
        {label:'NÍVEL',source:'grau.grau'},
        {label:'DEPARTAMENTO',source:'departamento.nome_departamento'},
      ],
      asideTitle: null,
      id: null,
      item: null,
      show: false,
    };
  },
  methods: {
    async onAction({ action, title, id, item }) {
      this.asideTitle = title;
      this.id = id;
      this.show = action === "show";
      this.item = item;
    },
    onSaved() {
      this.asideTitle = null;
      this.$refs.list.fetchData();
    },
  },
};
</script>