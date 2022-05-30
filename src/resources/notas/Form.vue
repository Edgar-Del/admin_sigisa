<template>
  <va-form :id="id" :item="item">
    <v-row justify="center">
      <v-col sm="10">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2">
              {{ title }}
            </div>
          </template>
         <v-card-text>
           <va-select-input
              label="DISCIPLINA"
               :source="'disciplina.nome_disciplina'"
               model="atribuicao_id"
               reference="atribuicoes"
             ></va-select-input>
           <va-select-input
               label="ESTUDANTE"
               :source="'matricula.estudante.nome_completo'"
               model="confirmacao_id"
               reference="confirmacao_matriculas"
               :filter="{ active: true }"
             ></va-select-input>
              <va-text-input label="PP1" source="primeira_parcelar"></va-text-input>
              <va-text-input label="PP2" source="segunda_parcelar"></va-text-input>
              <va-text-input label="EXAME" source="exame"></va-text-input>
              <va-text-input label="RECURSO" source="recurso"></va-text-input>
              <va-text-input label="RECUPERAÇÃO" source="recuperacao"></va-text-input>
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
