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
             <va-text-input source="nome_curso"></va-text-input>
             <va-select-input
              source="nome_departamento"
               model="departamento_id"
               reference="departamento"
            ></va-select-input>
             <va-select-input
              source="grau"
               reference="graus"
            ></va-select-input>
            <!--
             <va-select-input
              source="departamento"
             
            ></va-select-input>
            -->
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
