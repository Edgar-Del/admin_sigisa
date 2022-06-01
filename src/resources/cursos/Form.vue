<template>
  <va-form :id="id" :item="item">
    <v-row justify="center">
          <v-card-text>
             <va-text-input label="Curso" source="nome_curso"></va-text-input>
             <va-select-input
             label="Departamento"
              source="departamento"
               model="departamento_id"
               reference="departamento"
            ></va-select-input>
             <va-select-input
             
              model="grau_id"
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
    </v-row>
  </va-form>
</template>

<script>
export default {
  props: ["id", "title", "item"],
};
</script>
