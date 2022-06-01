<template>
  <div>
    <va-aside-layout :title="asideTitle">
      <notas-show v-if="show" :item="item"></notas-show>
      <notas-form v-else :id="id" :item="item" @saved="onSaved"></notas-form>
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
          label: "CURSO",
          source: "confirmacao.matricula.curso.nome_curso",
        },
        {
          label: "ANO ACADÉMICO",
          source: "confirmacao.ano_academico.ano_academico",
        },
        {
          label: "TURMA",
          source: "atribuicao.turma.nome_turma",
        },
        {
          label: "DISCIPLINA",
          source: "atribuicao.disciplina.nome_disciplina",
        },
        {
          label: "DOCENTE",
          source: "atribuicao.docente.nome_completo",
        },
        {
          label: "ESTUDANTE",
          source: "confirmacao.matricula.estudante.nome_completo",
        },
        ],
      fields: [
        {label:'ESTUDANTE',source:'confirmacao.matricula.estudante.nome_completo',sortable:true},
        {label:'PP1',source:'primeira_parcelar'},
        {label:'PP2',source:'segunda_parcelar'},
        {label:'EXAME',source:'exame'},
        {label:'RECURSO',source:'recurso'},
        {label:'RECUPERAÇÃO',source:'recuperaçao'},
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
