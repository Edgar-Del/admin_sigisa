<template>
  <va-form :id="id" :item="item">
    <v-row justify="center">
      <v-col sm="10">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2">
              {{ title }}
            </div>
          </template>
         <v-card-text>
            <v-row>
           <v-col sm="6">
             <va-text-input source="nome_prova"></va-text-input>
           </v-col>
            <v-col sm="6">
               <va-select-input
               :source="'nome_disciplina'"
               model="disciplina"
              reference="disciplinas"
               :filter="{ active: true }"
             ></va-select-input>
             </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
         <va-date-input source="data_fim"></va-date-input>
              </v-col>
            <v-col sm="6">
           <va-date-input source="data_inicio"></va-date-input>
             </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
              <va-select-input
               :source="'turma'"
               model="turma"
              reference="turmas"
               :filter="{ active: true }"
             ></va-select-input>
              </v-col>
           <v-col sm="6">
             <va-select-input
               :source="'nome_curso'"
               model="curso"
              reference="cursos"
               :filter="{ active: true }"
             ></va-select-input>
              </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
              <va-select-input
               :source="'semestre'"
               model="semestre"
              reference="semestres"
               :filter="{ active: true }"
             ></va-select-input>
              </v-col>
           <v-col sm="6">
             <va-select-input
               :source="'ano_academico'"
               model="ano_academico"
              reference="ano_academicos"
               :filter="{ active: true }"
             ></va-select-input>
              </v-col>
             </v-row>
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
