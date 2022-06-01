<template>
  <div>
    <va-aside-layout :title="asideTitle">
      <ano-letivos-show v-if="show" :item="item"></ano-letivos-show>
      <ano-letivos-form v-else :id="id" :item="item" @saved="onSaved"></ano-letivos-form>
    </va-aside-layout>
    <base-material-card :icon="resource.icon" :title="title">
      <va-list ref="list" disable-create-redirect @action="onAction">
        <va-data-table
          :fields="fields"
          disable-create-redirect
          disable-show-redirect
          disable-edit-redirect
          @item-action="onAction"
        >
        </va-data-table>
      </va-list>
    </base-material-card>
  </div>
</template>

<script>
export default {
  props: ["resource", "title"],
  data() {
    return {
       filters: [
         {
           label:'ANO LETIVO',
           source:'ano_letivo'
           },
       ],
     
      fields: [
        {label:'ANO LETIVO',source:'ano_letivo',sortable:true},
        {label:'ESTADO',source:'estado',sortable:true},
        ],
      asideTitle: null,
      id: null,
      item: null,
      show: false,
    };
  },
  methods: {
    async onAction({ action, title, id, item }) {
      this.asideTitle = title;
      this.id = id;
      this.show = action === "show";
      this.item = item;
    },
    onSaved() {
      this.asideTitle = null;
      this.$refs.list.fetchData();
    },
  },
};
</script>