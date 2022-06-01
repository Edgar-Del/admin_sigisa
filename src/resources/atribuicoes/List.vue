<template>
  <div>
    <va-aside-layout :title="asideTitle">
     <atribuicoes-show v-if="show" :item="item"></atribuicoes-show>
      <atribuicoes-form v-else :id="id" :item="item" @saved="onSaved"></atribuicoes-form>
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
         {
           label:'CURSO',
           source:'curso.nome_curso'
           },
         {
           label:'DOCENTE',
           source:'docente.nome_completo'
           },
         {
           label:'TURMA',
           source:'turma.nome_turma'
           },
         {
           label:'DISCIPLINA',
           source:'disciplina.nome_disciplina'
           },
       ],
      fields: [
        {label:'DISCIPLINA',source:'disciplina.nome_disciplina',sortable:true},
        {label:'DOCENTE',source:'docente.nome_completo',sortable:true},
        {label:'CURSO',source:'curso.nome_curso',sortable:true},
        {label:'TURMA',source:'turma.nome_turma',sortable:true},
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