module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "简历 |程国强 |Eric";
      return args;
    });
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A", //"#1DA57A",
            "border-radius-base": "2px",
            "disabled-color": "#d1d1d1",
            "error-color": "#ff4d4f",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
