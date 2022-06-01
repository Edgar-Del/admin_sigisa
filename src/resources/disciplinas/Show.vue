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
             <v-row>
               <v-col sm="6">
                 <va-field label="DISCIPLINA" source="nome_disciplina"></va-field>
               </v-col>
               <v-col sm="6">
                 <va-field label="TIPO DE DISCIPLINA" source="tipo_disciplina"></va-field>
               </v-col>
             </v-row>
             <v-row>
               <v-col sm="6">
                 <va-field label="CURSO" source="curso.nome_curso"></va-field>
               </v-col>
               <v-col sm="6">
                 <va-field label="SEMESTRE" source="semestre.semestre"></va-field>
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
