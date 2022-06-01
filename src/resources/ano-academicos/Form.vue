<template>
  <va-form :id="id" :item="item">
    <v-row justify="center">
     
          <v-card-text>
        
            <va-text-input source="ano_academico"></va-text-input>
         <!--   <va-text-input source="curso"></va-text-input> -->
       <va-select-input
               :source="'nome_curso'"
               model="curso_id"
               reference="cursos"
             ></va-select-input>
           <va-select-input
               source="ano_letivo"
               model="ano_letivo_id"
               reference="ano_letivos"
            ></va-select-input>
         </v-card-text>
          <va-save-button></va-save-button>
    </v-row>
  </va-form>
</template>

<script>

export default {
 
  props: ["id", "title", "item"],

};


</script>
