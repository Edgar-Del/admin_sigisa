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
            <va-text-input source="nome_completo"></va-text-input>
            <va-text-input source="num_identificacao"></va-text-input>
            <va-text-input source="morada"></va-text-input>
            <va-text-input source="telefone"></va-text-input>
            <va-text-input source="email"></va-text-input>
            <va-text-input source="sexo"></va-text-input>
            <va-text-input source="estado_civil"></va-text-input>
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
