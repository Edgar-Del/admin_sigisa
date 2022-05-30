<template>
  <va-form :id="id" :item="item">
    <v-row justify="center">
      <v-col sm="6">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2">
              {{ title }}
            </div>
          </template>
          <v-card-text>
            <va-text-input label="Disciplina" source="nome_disciplina"></va-text-input>
            <va-text-input label="Tipo de Disciplina" source="tipo_disciplina"></va-text-input>
            <va-text-input label="Carga Horária" source="carga_horaria"></va-text-input>
            <va-select-input
               :source="'nome_curso'"
               model="curso_id"
               reference="cursos"
             ></va-select-input>
            <va-select-input
               :source="'semestre'"
               model="semestre_id"
               reference="semestres"
               
             ></va-select-input>
            <va-select-input
              label="Ano Académico"
              :source="'ano_academico'"
               model="ano_academico_id"
               reference="ano_academicos"
               
             ></va-select-input>
          </v-card-text>
          <va-save-button></va-save-button>
        </base-material-card>
      </v-col>
    </v-row>
  </va-form>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
