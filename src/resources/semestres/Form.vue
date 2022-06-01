<template>
  <va-form :id="id" :item="item">
    <v-row justify="center">
    
          <v-card-text>
            <va-text-input label="SEMESTRE" source="semestre"></va-text-input>
            <va-date-input label="INÍCIO" source="data_inicio" format="short"></va-date-input>
            <va-date-input label="FIM" source="data_fim" format="short"></va-date-input>
            <va-select-input source="estado" chip :choices="choices"></va-select-input>
           <va-select-input
               :source="'ano_letivo'"
               model="ano_letivo_id"
               reference="ano_letivos"
               :filter="{ active: true }"
             ></va-select-input>
          </v-card-text>
          <va-save-button></va-save-button>
    </v-row>
  </va-form>
</template>

<script>
export default {
  props: ["id", "title", "item"],
  data() {
    return {
      choices: [
        { value: 'Ativo', text: 'Ativo' },
        { value: 'Inativo', text: 'Inativo' }
      ]
    }
  }
};
</script>
