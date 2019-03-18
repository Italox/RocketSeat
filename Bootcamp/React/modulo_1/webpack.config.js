const path = require('path'); // Modulo global do node para não precisar de barra invertida no windows

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // Informa qual é o arquivo inicial/principal da aplicação. Tudo no React parte de um arquivo principal
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  }, // Informa onde será jogado o código transpilado
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // Pasta que o webserver precisa ficar monitorando para atualizar sozinho
  }, // Configurações do webpack-dev-server
  module: {
    rules: [
      {
        test: /\.js$/, // Transpilar apenas js
        exclude: /node_modules/, // Não transpila nada que esta na pasta node_modules
        use: {
          loader: 'babel-loader', // Informa o loader que será utilizado na transpilação. Vai utilizar as configurações do .babelrc
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  }, // Configura modulos
};
