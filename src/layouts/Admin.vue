<template>
  <va-layout>
    <va-app-bar
    color="#34495e"
      slot="app-bar"
      :header-menu="headerMenu"
      :profile-menu="profileMenu"
      dense
      dark
      @toggle="
        $vuetify.breakpoint.lgAndUp ? (mini = !mini) : (drawer = !drawer)
      "
    ></va-app-bar>

    <va-sidebar
      slot="sidebar"
      :menu="sidebarMenu"
      v-model="drawer"
      :mini-variant="mini"
      dark
    >
      <template v-slot:img="props" background-color="#34495e">
        <v-img
          src="../assets/splash.jpg"
          gradient="to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)"
          v-bind="props"
        />
      </template>
     </va-sidebar>
    <va-breadcrumbs slot="header"></va-breadcrumbs>
    <va-aside slot="aside"></va-aside>
    <va-footer slot="footer" :menu="footerMenu">
      @tec_interativa  &copy; 2022
    </va-footer>
  </va-layout>
</template>

<script>
import nav from "../_nav";

export default {
  name: "App",
  data() {
    return {
      drawer: null,
      mini: false,
      headerMenu: [
        {
          link: "/",
          text: this.$t("menu.dashboard"),
        },
      ],
      footerMenu: [
        {
          href: "#",
          text: "Sobre Nós",
        },
        {
          href: "#",
          text: "Blog",
        },
        {
          href: "#",
          text: "Licença",
        },
      ],
      profileMenu: [
        {
          icon: "mdi-account",
          text: this.$t("menu.profile"),
          link: "/profile",
        },
      ],
      sidebarMenu: nav(this.$i18n, this.$admin),
    };
  },
};
</script>
