<template>
    <va-show :item="item">
      <v-row justify="center">
        <v-col sm="12">
          <base-material-card>
            <v-card-text>
              <v-row>
                <v-col sm="6">
                  <va-field label="SEMESTRE" source="semestre"></va-field>
                </v-col>
                <v-col sm="6">
                   <va-field  label="ANO" source="ano_letivo.ano_letivo"></va-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col sm="6">
                   <va-field label="DATA DE INÍCIO" source="data_inicio"></va-field>
                </v-col>
                <v-col sm="6">
         <va-field label="DATA DE FIM" source="data_fim"></va-field>
                </v-col>
              </v-row>
            </v-card-text>
          </base-material-card>
        </v-col>
      </v-row>
    </va-show>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>
