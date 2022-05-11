module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: "false",
      enableBridge: undefined,
    },
  },
  transpileDependencies: ["vuetify"],
};
