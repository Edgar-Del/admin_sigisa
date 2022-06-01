<template>
  <va-form :id="id" :item="item">
    <v-row justify="center">
           <v-card-text>
              <va-text-input source="ano_letivo"></va-text-input>
              <va-text-input source="estado"></va-text-input>
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
