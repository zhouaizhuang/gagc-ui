const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const glob = require('glob')
let list = {}
const makeList = async function (dirPath){
  const files = glob.sync(`${dirPath}/**/index.js`)
  console.log(files)
  list = files.reduce((prev, item) => {
    const component = item.split('/')[2]
    prev[component] = `./${item}`
    return prev
  }, {})
}
makeList('components/lib')
console.log(list)
// {
//   card: './components/lib'
// }
module.exports = {
  mode: 'development',
  entry: list,
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd',
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}