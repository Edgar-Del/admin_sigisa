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
            <v-row justify="center">
              <v-col sm="8">
              <va-select-input
               :source="'nome_completo'"
               model="estudante_id"
              reference="estudantes"
               :filter="{ active: true }"
             ></va-select-input>
              </v-col>
             </v-row>
            <v-row>
           <v-col sm="2">
             <va-text-input source="nota"></va-text-input>
           </v-col>
            <v-col sm="10">
               <va-select-input
               :source="'prova'"
               model="prova_id"
              reference="provas"
               :filter="{ active: true }"
             ></va-select-input>
             </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
       <va-select-input
               :source="'ano_academico'"
               model="ano_academico_id"
              reference="ano_academicos"
               :filter="{ active: true }"
             ></va-select-input>
              </v-col>
            <v-col sm="6">
          <va-select-input
               :source="'nome_curso'"
               model="curso_id"
              reference="cursos"
               :filter="{ active: true }"
             ></va-select-input>
             </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
              <va-select-input
               :source="'turma'"
               model="turma_id"
              reference="turmas"
               :filter="{ active: true }"
             ></va-select-input>
              </v-col>
           <v-col sm="6">
             <va-select-input
               :source="'nome_disciplina'"
               model="disciplina_id"
              reference="disciplinas"
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
