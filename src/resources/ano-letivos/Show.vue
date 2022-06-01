<template>
 
    <va-show :item="item">
      <v-row justify="center">
        <v-col sm="12">
        <base-material-card>
             <v-card-text>
               <v-row>
                 <v-col sm="6">
              <va-field source="ano_letivo"></va-field>
              </v-col>
               <v-col sm="6">
              <va-field source="estado"></va-field>
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
