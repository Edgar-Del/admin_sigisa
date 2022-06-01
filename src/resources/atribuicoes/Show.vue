<template>
 
    <va-show :item="item">
      <v-row justify="center">
        <v-col sm="12">
       <base-material-card>
            <v-card-text>
             <v-row>
               <v-col sm="6">
                 <va-field label="DISCIPLINA" source="disciplina"></va-field>
               </v-col>
               <v-col sm="6">
                  <va-field label="DOCENTE" source="docente"></va-field>
               </v-col>
             </v-row>
             <v-row>
               <v-col sm="6">
                  <va-field label="CURSO" source="docente"></va-field>
               </v-col>
               <v-col sm="6">
                 <va-field label="TURMA" source="docente"></va-field>
               </v-col>
             </v-row>
             <v-row>
               <v-col sm="6">
                  <va-field label="ANO ACADEMICO" source="docente"></va-field>
               </v-col>
               <v-col sm="6">
                 <va-field label="PERIODO" source="docente"></va-field>
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
