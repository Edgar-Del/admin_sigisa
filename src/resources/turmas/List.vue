<template>
  <div>
    <va-aside-layout :title="asideTitle">
      <turmas-show v-if="show" :item="item"></turmas-show>
      <turmas-form v-else :id="id" :item="item" @saved="onSaved"></turmas-form>
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
      filters:[
         {label:'CURSO',source:'ano_academico.curso.nome_curso'},
        {label:'ANO ACADÉMICO',source:'ano_academico.ano_academico'},
        {label:'PERIODO',source:'periodo.nome_periodo'},
        {label:'SEMESTRE',source:'semestre.semestre'},
        {label:'TURMA',source: 'nome_turma'},
      ],
       fields: [
        {label:'TURMA',source:'nome_turma',sortable:true},
        {label:'SEMESTRE',source:'semestre.semestre'},
        {label:'ANO ACADÉMICO',source:'ano_academico.ano_academico'},
        {label:'PERIODO',source:'periodo.nome_periodo'},
        {label:'CURSO',source:'curso.nome_curso'},
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
