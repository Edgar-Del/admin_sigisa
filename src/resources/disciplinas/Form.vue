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
            <va-text-input source="nome_disciplina"></va-text-input>
            <va-text-input source="tipo_disciplina"></va-text-input>
            <va-select-input
               :source="'nome_curso'"
               model="curso"
               reference="cursos"
               :filter="{ active: true }"
             ></va-select-input>
            <va-select-input
               :source="'semestre'"
               model="semestre"
               reference="semestres"
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
