/* eslint-disable no-unused-vars */

export default (i18n, admin) => [
  {
    icon: "mdi-view-dashboard",
    text: i18n.t("menu.dashboard"),
    link: "/",
  },
  { divider: true },
  admin.getResourceLink("users"),
  admin.getResourceLink("books"),
  admin.getResourceLink("ano_letivos"),
  admin.getResourceLink("ano_academicos"),
  admin.getResourceLink("semestres"),
  admin.getResourceLink("turmas"),
  admin.getResourceLink("disciplinas"),
  admin.getResourceLink("docentes"),
  admin.getResourceLink("cursos"),
  admin.getResourceLink("disciplina_docentes"),
];
