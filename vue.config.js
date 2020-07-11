module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '简历 |程国强 |Eric'
        return args
      })
  }
}