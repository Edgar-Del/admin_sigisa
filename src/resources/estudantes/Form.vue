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
            <va-text-input source="naturalidade"></va-text-input>
            <va-text-input source="morada"></va-text-input>
             <va-text-input source="telefone"></va-text-input>
             <va-text-input source="email"></va-text-input>
             <va-date-input source="data_nascimento"></va-date-input>
             <va-text-input source="sexo"></va-text-input>
             <va-select-input
               :source="'estado_civil'"
               model="estado_civil"
               reference="estado_civil"
               :filter="{ active: true }"
             ></va-select-input>
      
             <va-text-input source="nome_pai"></va-text-input>
             <va-text-input source="nome_mae"></va-text-input>
             <va-text-input source="escola_proveniencia"></va-text-input>
             <va-text-input source="curso_proveniencia"></va-text-input>
             <va-select-input
               :source="'situacao_laboral'"
               model="situacao_laboral"
               reference="situacao_laboral"
               :filter="{ active: true }"
             ></va-select-input>
             <va-text-input source="instituicao_laboral"></va-text-input>
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
  data() {
    return {
      choices: [
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Feminino' }
      ]
    }
  }

};
</script>
