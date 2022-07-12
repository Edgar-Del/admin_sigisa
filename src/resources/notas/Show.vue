<template>
  <va-show-layout>
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
              <va-field label="DISCIPLINA" source="atribuicao.disciplina.nome_disciplina"></va-field>
              <va-field label="NOME COMPLETO" source="confirmacao_matriculas"></va-field>
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
