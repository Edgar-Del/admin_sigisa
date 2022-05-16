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
              <va-field source="nome_curso"></va-field>
              <va-field source="grau"></va-field>
              <va-field source="departamento"></va-field>
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
