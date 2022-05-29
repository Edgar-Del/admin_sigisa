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
            <va-text-input source="nome_completo"></va-text-input>
             <va-text-input source="num_identificacao"></va-text-input>
             
              <va-select-input
              label="Grau Académico"
              :source="'grau_academico'"
               model="grau_academico_id"
               reference="grau_academicos"
               :filter="{ active: true }"
             ></va-select-input>
            <va-text-input source="morada"></va-text-input>
             <va-text-input source="telefone"></va-text-input>
             <va-text-input source="email"></va-text-input>
             <va-text-input source="sexo"></va-text-input>
             <va-select-input
               :source="'estado_civil'"
               model="estado_civil_id"
               reference="estado_civil"
               :filter="{ active: true }"
             ></va-select-input>
             <va-select-input
               :source="'name'"
               model="user_id"
               reference="users"
               :filter="{ active: true }"
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
