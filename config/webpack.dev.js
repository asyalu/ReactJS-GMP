const { merge } = require("webpack-merge")
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    historyApiFallback: true,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
<<<<<<< HEAD
})
=======
})
>>>>>>> b784ead (completed task 3)
