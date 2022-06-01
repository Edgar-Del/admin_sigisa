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
               :source="'nome_completo'"
               model="estudante_id"
               reference="estudantes"
               :filter="{ active: true }"
             ></va-select-input>
           </v-col>
            <v-col sm="6">
            <va-select-input
               :source="'nome_unidade'"
               model="unidade_id"
               reference="unidade"
               :filter="{ active: true }"
             ></va-select-input>
             </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
         <va-select-input
               :source="'nome_curso'"
               model="curso_id"
               reference="cursos"
             ></va-select-input>
              </v-col>
            <v-col sm="6">
           <va-select-input
               :source="'nome_periodo'"
               model="periodo_id"
              reference="periodo"
               :filter="{ active: true }"
             ></va-select-input>
             </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
              <va-date-input source="data_matricula"></va-date-input>
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
