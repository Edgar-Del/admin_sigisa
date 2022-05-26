<template>
  <va-show-layout>
    <va-show :item="item">
      <v-row justify="center">
        <v-col sm="6">
          <base-material-card>
            <template v-slot:heading>
              <div class="display-2">
                {{ title }}
              </div>
            </template>
           <v-card-text>
                <v-row>
           <v-col sm="6">
        <va-field
               :source="'estudante_id'"
             ></va-field>
           </v-col>
            <v-col sm="6">
            <va-field
               :source="'nome_unidade'"
               model="unidade_id"
               reference="unidade"
               :filter="{ active: true }"
             ></va-field>
             </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
         <va-field
               :source="'nome_curso'"
               model="curso_id"
               reference="cursos"
               :filter="{ active: true }"
             ></va-field>
              </v-col>
            <v-col sm="6">
           <va-field
               :source="'nome_periodo'"
               model="periodo"
               reference="periodo"
               :filter="{ active: true }"
             ></va-field>
             </v-col>
             </v-row>
         <v-row>
           <v-col sm="6">
              <va-field source="data_matricula"></va-field>
              </v-col>
             </v-row>
            </v-card-text>
          </base-material-card>
        </v-col>
      </v-row>
    </va-show>
  </va-show-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
