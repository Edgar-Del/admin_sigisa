<template>
  <va-form :id="id" :item="item" disable-redirect @saved="$emit('saved')">
    <v-row justify="center">
        <base-material-card>
         <v-card-text>
            <va-select-input
              label="Disciplina"
               :source="'nome_disciplina'"
               model="disciplina_id"
               reference="disciplinas"
             ></va-select-input>
            <va-select-input
              label="Docente"
               :source="'nome_completo'"
               model="docente_id"
               reference="docentes"
             ></va-select-input>
            <va-select-input
              label="Turma"
               :source="'nome_turma'"
               model="turma_id"
               reference="turmas"
             ></va-select-input>
            <va-select-input
              label="Curso"
               :source="'nome_curso'"
               model="curso_id"
               reference="cursos"
             ></va-select-input>
          </v-card-text>
          <va-save-button></va-save-button>
        </base-material-card>
    </v-row>
  </va-form>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
