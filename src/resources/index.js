export default [
  {
    name: 'users',
    label: 'name',
    icon: 'mdi-account-circle',
    routes: [ 'list' ]
  },
  { name: 'disciplina_docentes', icon: 'mdi-post' },
  { name: 'books' },
  { name: 'cursos', icon: 'mdi-bookshelf', label: 'nome_curso' },
  {
    name: 'ano_letivos',
    icon: 'mdi-book-outline',
    label: 'ano_letivo'
  },
  {
    name: 'ano_academicos',
    icon: 'mdi-bookmark-box-multiple',
    label: 'ano_academico'
  },
  {
    name: 'semestres',
    icon: 'mdi-av-timer',
    label: 'semestre',
    actions: [ 'edit', 'list', 'delete' ]
  },
  { name: 'turmas', icon: 'mdi-google-classroom', label: 'nome_turma' },
  {
    name: 'disciplinas',
    icon: 'mdi-book-open-page-variant-outline',
    label: 'nome_disciplina'
  },
  {
    name: 'docentes',
    icon: 'mdi-account-details',
    label: 'nome_completo'
  },
  { name: 'graus', label: 'grau' },
  { name: 'grau_academicos', label: 'grau_academico' },
  { name: 'estado_civil', label: 'estado_civil' },
  { name: 'periodo', label: 'nome_periodo' },
  { name: 'departamento', label: 'nome_departamento' },
  { name: 'unidade', label: 'nome_unidade' },
  { name: 'situacao_laboral', label: 'situacao_laboral' },
  { name: 'estudantes', label: 'nome_completo' },
  { name: 'matriculas' }
]
