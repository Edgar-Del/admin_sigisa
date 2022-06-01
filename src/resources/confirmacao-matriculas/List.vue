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
        {
          label: "CURSO",
          source: "matricula.curso.nome_curso",
        },
        {
          label: "ANO ACADÉMICO",
          source: "ano_academico.ano_academico",
        },
        {
          label: "TURMA",
          source: "turma",
        },
        ],
      fields: [
        {label:'NOME',source:'matricula.estudante.nome_completo',sortable:true},
        {label:'CURSO',source:'matricula.curso.nome_curso',sortable:true},
        {label:'PERIODO',source:'matricula.periodo.nome_periodo',sortable:true},
        {label:'SEMESTRE',source:'semestre.semestre',},
        {label:'ANO',source:'ano_academico.ano_academico',sortable:true},
        {label:'TURMA',source:'turma.nome_turma',sortable:true},
      ],
    };
  },
};
</script>
