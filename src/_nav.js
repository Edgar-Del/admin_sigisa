/* eslint-disable no-unused-vars */

export default (i18n, admin) => [
  {
    icon: "mdi-view-dashboard",
    text: i18n.t("menu.dashboard"),
    link: "/",
  },
  { divider: true },
  admin.getResourceLink("users"),
 //admin.getResourceLink("books"),
  admin.getResourceLink("ano_letivos"),
  admin.getResourceLink("ano_academicos"),
  admin.getResourceLink("semestres"),
  admin.getResourceLink("turmas"),
  admin.getResourceLink("disciplinas"),
  admin.getResourceLink("docentes"),
  admin.getResourceLink("cursos"),
  //admin.getResourceLink("graus"),
  //admin.getResourceLink("grau_academicos"),
  //admin.getResourceLink("estado_civil"),
  //admin.getResourceLink("periodo"),
 // admin.getResourceLink("departamento"),
 // admin.getResourceLink("unidade"),
 // admin.getResourceLink("situacao_laboral"),
  admin.getResourceLink("disciplina_docentes"),
];
