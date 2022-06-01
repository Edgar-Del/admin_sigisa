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
                <v-col sm="4">
                   <va-field source="nome_completo"></va-field>
                </v-col>
                <v-col sm="4">
 
             <va-field source="num_identificacao"></va-field>
                </v-col>
                <v-col sm="4">
 <va-field source="morada"></va-field>
                </v-col>
             </v-row>
             <v-row>
              <v-col sm="4">
                   <va-field source="escola_proveniencia"></va-field>
                </v-col>
                <v-col sm="4">
 <va-field source="curso_proveniencia"></va-field>
                </v-col>
                <v-col sm="4">
<va-field source="naturalidade"></va-field>
                </v-col>
             </v-row>
             <v-row>
                <v-col sm="4">
                  <va-field source="telefone"></va-field>
                </v-col>
                <v-col sm="4">
<va-field source="email"></va-field>
                </v-col>
                <v-col sm="4">
             <va-field source="sexo"></va-field>
                </v-col>
             </v-row>
             <v-row>
                <v-col sm="4">
                  <va-field source="estado_civil.estado_civil"></va-field>
                </v-col>
                <v-col sm="4">
                  <va-field source="situacao_laboral.situacao_laboral"></va-field>

                </v-col>
                <v-col sm="4">
                  <va-field source="instituicao_laboral"></va-field>

                </v-col>
             </v-row>
             <v-row>
                <v-col sm="4">
                  <va-field source="nome_pai"></va-field>
                </v-col>
                <v-col sm="4">
  <va-field source="nome_mae"></va-field>
                </v-col>
                <v-col sm="4">
  <va-field source="user_id.name"></va-field>
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
