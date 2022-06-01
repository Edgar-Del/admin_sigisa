<template>
  <va-show-layout>
    <va-show :item="item">
      <v-row justify="center">
        <v-col sm="8">
          <base-material-card>
            <template v-slot:heading>
              <div class="display-2">
                {{ title }}
              </div>
            </template>
            <v-card-text>
              <v-row>
                <v-col sm="4">
                  <va-field label="NOME COMPLETO" source="nome_completo"></va-field>
                </v-col>
                <v-col sm="4">
                  <va-field label="NÚMERO DE IDENTIFICAÇÃO"  source="num_identificacao"></va-field>
                </v-col>
                <v-col sm="4">
                  <va-field label="GRAU ACADÉMICO"  source="grau_academico.grau_academico"></va-field>
                </v-col>
              </v-row>
              <v-row>

                <v-col sm="4">
                   <va-field label="MORADA"  source="morada"></va-field>
                </v-col>
                <v-col sm="4">
                  <va-field label="TELEFONE"  source="telefone"></va-field>
                </v-col>
                <v-col sm="4">
                    <va-field label="EMAIL"  source="email"></va-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col sm="4">
                   <va-field label="GÉNERO"  source="sexo"></va-field>
                </v-col>
                <v-col sm="4">
                   <va-field label="ESTADO CIVIL"  source="estado_civil.estado_civil"></va-field>

                </v-col>
                <v-col sm="4">

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
