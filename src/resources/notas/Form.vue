<template>
  <va-form :id="id" :item="item">
    <v-row justify="center">
     
         <v-card-text>
           <va-select-input
              label="DISCIPLINA"
               :source="'atribuicao.disciplina'"
               model="atribuicao_id"
               reference="atribuicoes"
             ></va-select-input>
           <va-select-input
               label="ESTUDANTE"
               :source="'confirmacao'"
               model="confirmacao_id"
               reference="confirmacao_matriculas"
             ></va-select-input>
              <va-text-input label="PP1" source="primeira_parcelar"></va-text-input>
              <va-text-input label="PP2" source="segunda_parcelar"></va-text-input>
              <va-text-input label="EXAME" source="exame"></va-text-input>
              <va-text-input label="RECURSO" source="recurso"></va-text-input>
              <va-text-input label="RECUPERAÇÃO" source="recuperacao"></va-text-input>
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
