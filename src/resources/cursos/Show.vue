<template>

    <va-show :item="item">
      <v-row justify="center">
        <v-col sm="12">
          <base-material-card>
            <template v-slot:heading>
             <div class="display-2">
                {{ title }}
              </div>
            </template>
            <v-card-text>
              <va-field label= 'CURSO' source="nome_curso"></va-field>
              <va-field label='GRAU' source="grau.grau"></va-field>
              <va-field label='DEPARTAMENTO' source="departamento.nome_departamento"></va-field>
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
