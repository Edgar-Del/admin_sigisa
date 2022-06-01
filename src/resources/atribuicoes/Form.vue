<template>
  <va-form :id="id" :item="item" disable-redirect @saved="$emit('saved')">
    <v-row justify="center">
         <v-card-text>
            <va-select-input
              label="Disciplina"
               :source="'disciplina'"
               model="disciplina_id"
               reference="disciplinas"
             ></va-select-input>
            <va-select-input
              label="Docente"
               :source="'docente'"
               model="docente_id"
               reference="docentes"
             ></va-select-input>
           
            <va-select-input
              label="Curso"
               :source="'curso'"
               model="curso_id"
               reference="cursos"
             ></va-select-input>
              <va-select-input
              label="Turma"
               :source="'turma'"
               model="turma_id"
               reference="turmas"
             ></va-select-input>
          </v-card-text>
          <va-save-button></va-save-button>
    </v-row>
  </va-form>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
