<template>
  <va-form :id="id" :item="item">
    <v-row justify="center">
      <v-col sm="6">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2">
              {{ title }}
            </div>
          </template>
          <v-card-text>
        
            <va-text-input source="ano_academico"></va-text-input>
         <!--   <va-text-input source="curso"></va-text-input> -->
       <va-select-input
               :source="'nome_curso'"
               model="curso"
               reference="cursos"
               :filter="{ active: true }"
             ></va-select-input>
          <va-select-input
               :source="'grau'"
               model="grau"
               reference="graus"
               :filter="{ active: true }"
             ></va-select-input>
         
           <va-select-input
               model="ano_letivo"
               reference="ano_letivos"
               source="ano_letivo"
               :filter="{ active: true }"
            ></va-select-input>
             
         </v-card-text>
          <va-save-button></va-save-button>
        </base-material-card>
      </v-col>
    </v-row>
  </va-form>
</template>

<script>

export default {
 
  props: ["id", "title", "item"],

};


</script>
