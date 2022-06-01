<template>
  <div>
    <va-aside-layout :title="asideTitle">
      <disciplinas-show v-if="show" :item="item"></disciplinas-show>
      <disciplinas-form v-else :id="id" :item="item" @saved="onSaved"></disciplinas-form>
    </va-aside-layout>
    <base-material-card :icon="resource.icon" :title="title">
      <va-list :filters="filters" ref="list" disable-create-redirect @action="onAction">
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
        {label:'CURSO',source:'curso.nome_curso'},
        {label:'ANO ACADÉMICO',source:'ano_academico.ano_academico'},
        {label:'TIPO DE DISCIPLINA',source:'tipo_disciplina'},
        {label:'DISCIPLINA',source: 'nome_disciplina'},
        {label:'SEMESTRE',source: 'semestre.semestre'},
      ],
      fields: [
        {label:'DISCIPLINA',source:'nome_disciplina',sortable:true},
       {label:'TIPO DISCIPLINA',source:'tipo_disciplina',sortable:true},
        {label:'CURSO',source:'curso.nome_curso'},
        {label:'ANO ACADÉMICO',source:'ano_academico.ano_academico'},
        {label:'SEMESTRE',source:'semestre.semestre'},
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
