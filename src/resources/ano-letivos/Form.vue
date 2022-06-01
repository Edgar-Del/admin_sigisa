<template>
  <va-form :id="id" :item="item">
    <v-row justify="center">
           <v-card-text>
              <va-text-input source="ano_letivo"></va-text-input>
              <va-select-input source="estado" chip :choices="choices"></va-select-input>
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
