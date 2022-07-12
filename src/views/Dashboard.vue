<template>
  <div>
    <v-row>
     <!-- <v-col cols="12" lg="4">
        <base-material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="#E91E63"
          hover-reveal
          type="Bar"
        >
          <template v-slot:reveal-actions>
         <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info"> mdi-refresh </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">Disciplinas</h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Last Campaign Performance
          </p>

          <template v-slot:actions>
            <v-icon class="mr-1" small> mdi-clock-outline </v-icon>
            <span class="caption grey--text font-weight-light"
              >updated 10 minutes ago</span
            >
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col cols="12" lg="4">
        <base-material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="success"
          hover-reveal
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info"> mdi-refresh </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">Daily Sales</h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            <v-icon color="green" small> mdi-arrow-up </v-icon>
            <span class="green--text">55%</span>&nbsp; increase in today's sales
          </p>

          <template v-slot:actions>
            <v-icon class="mr-1" small> mdi-clock-outline </v-icon>
            <span class="caption grey--text font-weight-light"
              >updated 4 minutes ago</span
            >
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col cols="12" lg="4">
        <base-material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          hover-reveal
          color="info"
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" color="info" icon v-on="on">
                  <v-icon color="info"> mdi-refresh </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" light icon v-on="on">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h3 class="card-title font-weight-light mt-2 ml-2">
            Completed Tasks
          </h3>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Last Last Campaign Performance
          </p>

          <template v-slot:actions>
            <v-icon class="mr-1" small> mdi-clock-outline </v-icon>
            <span class="caption grey--text font-weight-light"
              >campaign sent 26 minutes ago</span
            >
          </template>
        </base-material-chart-card>
      </v-col>
-->
      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="info"
          icon="mdi-account-school"
          title="Estudantes"
          value="+245"
          sub-text="Atualizando..."
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="primary"
          icon="mdi-bookshelf"
          title="Cursos"
          value="6"
          sub-icon="mdi-tag"
          sub-text="Ano Letivo 2021/2022"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="success"
          icon="mdi-account-details"
          title="Docentes"
          value="+34"
          sub-text="Docentes por curso"
        />
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <base-material-stats-card
          color="orange"
          icon="mdi-book-open-page-variant-outline"
          title="Disciplinas"
          value="84"
          sub-text="Disciplinas disponíveis..."
        />
      </v-col>

      <v-col cols="12" md="6">
        <base-material-card color="warning" class="px-5 py-3">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Solicitações</div>

            <div class="subtitle-1 font-weight-light">
              Novas solicitações (10/Jun/2022)
            </div>
          </template>
          <v-card-text>
            <v-data-table :headers="headers" :items="items" />
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="6">
        <base-material-card class="px-5 py-3">
          <template v-slot:heading>
            <v-tabs
              v-model="tabs"
              background-color="transparent"
              slider-color="white"
            >
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
                >Tarefas:</span
              >
              <v-tab class="mr-3">
                <v-icon class="mr-2"> mdi-application-cog-outline </v-icon>
                TI
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2"> mdi-badge-account-horizontal-outline </v-icon>
                Secretaria
              </v-tab>
              <v-tab>
                <v-icon class="mr-2"> mdi-briefcase-account-outline </v-icon>
                Exterior
              </v-tab>
            </v-tabs>
          </template>

          <v-tabs-items v-model="tabs" class="transparent">
            <v-tab-item v-for="n in 3" :key="n">
              <v-card-text>
                <template v-for="(task, i) in tasks[tabs]">
                  <v-row :key="i" align="center">
                    <v-col cols="1">
                      <v-list-item-action>
                        <v-checkbox v-model="task.value" color="secondary" />
                      </v-list-item-action>
                    </v-col>

                    <v-col cols="9">
                      <div class="font-weight-light" v-text="task.text" />
                    </v-col>

                    <v-col cols="2" class="text-right">
                      <v-icon class="mx-1"> mdi-pencil </v-icon>
                      <v-icon color="error" class="mx-1"> mdi-close </v-icon>
                    </v-col>
                  </v-row>
                </template>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </base-material-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: ["S", "T", "Q", "Q", "S", "S", "D"],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Jan",
            "Fev",
            "Mai",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      headers: [
        {
          sortable: false,
          text: "ID",
          value: "id",
        },
        {
          sortable: false,
          text: "Nome",
          value: "nome",
        },
        {
          sortable: false,
          text: "Documento",
          value: "documento",
          align: "right",
        },
        {
          sortable: false,
          text: "Curso",
          value: "curso",
          align: "right",
        },
      ],
      items: [

        {
          id: 1,
          nome: "Minerva Hooper",
          curso: "Engenharia Informática",
          documento: "Declaração",
        },
        {
          id: 2,
          nome: "Sage Rodriguez",
          curso: "Comunicação Social",
          documento: "Certificado",
        },
        {
          id: 3,
          nome: "Filipe Calei",
          curso: "Engenharia de Recursos Hídricos",
          documento: "Certificado",
        },
        {
          id: 4,
          nome: "Doriana Graça",
          curso: "Engenharia Informática",
          documento: "Declaração",
        },
      ],
      tabs: 0,
      tasks: {
        0: [
          {
            text: 'Reunir com a Equipa de TI"',
            value: true,
          },
          {
            text: "Enviar emails ao Estudantes finalistas",
            value: false,
          },
        ],
        1: [
          {
            text: "Analisar as Solicitações de Documentos",
            value: true,
          },
          {
            text: 'Atualizar a equipa de TI sobre o Backup"',
            value: false,
          },
        ],
        2: [
          
          {
            text: "Encaminhar o Dossier para a outorga",
            value: true,
          },
          {
            text: 'Assinar o Acordo de Parceria com o Hospital Dr. Walter Strangway"',
            value: true,
          },
        ],
      },
      list: {
        0: false,
        1: false,
        2: false,
      },
    };
  },

  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
  },
};
</script>
