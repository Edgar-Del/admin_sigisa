<template>
  <va-show-layout>
    <va-show :item="item">
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
              <va-field source="nome_completo"></va-field>
             <va-field source="num_identificacao"></va-field>
             <va-field source="morada"></va-field>
             </v-row>
             <va-field source="escola_proveniencia"></va-field>
             <va-field source="curso_proveniencia"></va-field>
             
             <va-field source="naturalidade"></va-field>
             <va-field source="telefone"></va-field>
             <va-field source="email"></va-field>
             <va-field source="sexo"></va-field>
             <va-field source="estado_civil"></va-field>
             <va-field source="situacao_laboral"></va-field>
             <va-field source="instituicao_laboral"></va-field>
             <va-field source="nome_pai"></va-field>
             <va-field source="nome_mae"></va-field>
             <va-field source="user_id"></va-field>
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
