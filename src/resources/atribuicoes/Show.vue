<template>
 
    <va-show :item="item">
      <v-row justify="center">
        <v-col sm="12">
       <base-material-card>
            <v-card-text>
             <v-row>
               <v-col sm="6">
                 <va-field label="DISCIPLINA" source="disciplina.nome_disciplina"></va-field>
               </v-col>
               <v-col sm="6">
                  <va-field label="DOCENTE" source="docente.nome_completo"></va-field>
               </v-col>
             </v-row>
             <v-row>
               <v-col sm="6">
                  <va-field label="CURSO" source="curso.nome_curso"></va-field>
               </v-col>
               <v-col sm="6">
                 <va-field label="TURMA" source="turma.nome_turma"></va-field>
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
