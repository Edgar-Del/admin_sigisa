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
        <va-select-input
              label="Estudante"
               :source="'estudante.nome_completo'"
               model="matricula_id"
               reference="matriculas"
             ></va-select-input>
           </v-col>
            <v-col sm="6">
            <va-select-input
               :source="'semestre'"
               model="semestre_id"
               reference="semestres"
             ></va-select-input>
             </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
         <va-select-input
               :source="'ano_academico'"
               model="ano_academico_id"
               reference="ano_academicos"
             ></va-select-input>
              </v-col>
            <v-col sm="6">
           <va-select-input
               :source="'turma'"
               model="turma_id"
               reference="turmas"
             ></va-select-input>
             </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
              <va-date-input source="data_confirmacao"></va-date-input>
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
