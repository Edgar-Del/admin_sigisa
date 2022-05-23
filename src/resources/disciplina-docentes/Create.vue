<template>
  <va-create-layout :title="title">
    <va-form :item="item">
      <v-row justify="center">
        <v-col sm="4">
          <v-card>
            <v-card-text>
              <va-save-button></va-save-button>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </va-form>
  </va-create-layout>
</template>

<script>
export default {
  props: ["title", "item"],
};
</script>