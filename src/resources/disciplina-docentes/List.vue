<template>
  <va-edit-layout>
    <authors-form :id="id" :title="title" :item="item"></authors-form>
    <base-material-card
      icon="mdi-book"
      :title="$tc('resources.docentes.name', 10)"
    >
      <va-list
        resource="books"
        disable-global-search
        disable-pagination
        disable-query-string
        disable-create
        disable-export
        :association="association"
        :filter="{
          authors: id,
        }"
        :include="['publisher', 'reviews']"
      >
        <va-data-table
          resource="books"
          disable-sort
          disable-select
          disable-clone
          disable-delete
          :association="association"
          :fields="fields"
        ></va-data-table>
      </va-list>
    </base-material-card>
  </va-edit-layout>
</template>

<script>
export default {
  props: ["id", "title", "item"],
  data() {
    return {
      fields: [
        //...
      ],
      association: {
        resource: "authors",
        source: "author_id",
        id: this.id,
      },
    };
  },
};
</script>
