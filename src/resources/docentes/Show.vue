<template>
  <va-show-layout>
    <va-show :item="item">
      <v-row justify="center">
        <v-col sm="6">
          <base-material-card>
            <template v-slot:heading>
              <div class="display-2">
                {{ title }}
              </div>
            </template>
            <v-card-text>
              <va-text-field source="nome_completo"></va-text-field>
             <va-text-field source="num_identificacao"></va-text-field>
             <va-text-field source="grau_academico"></va-text-field>
             <va-text-field source="morada"></va-text-field>
             <va-text-field source="telefone"></va-text-field>
             <va-text-field source="email"></va-text-field>
             <va-text-field source="sexo"></va-text-field>
             <va-text-field source="estado_civil"></va-text-field>
             <va-text-field source="user_id"></va-text-field>
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
