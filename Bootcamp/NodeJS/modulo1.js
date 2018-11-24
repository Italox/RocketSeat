const express = require('express'); // Importa modulo

const app = express(); //Instancia o express

const logMiddleware = (req, res, next) => {
    console.log(
      `HOST: ${req.headers.host}, URL: ${req.url}, METHOD ${req.method}`  //Requisição de informações da máquina que acessou o servidor.
    );
    req.appname = "GoNode";
    return next(); //Não deixa o script parar no middleware
    /* Um middleware é um interceptador, então ele pode ficar escutando a requisição e não parar de executar. 
    Para resolver isso adiciona o parametro next na requisição do middleware e chama a função, assim ele 
    executa o midleware e os demais códigos da página.*/
};

app.use(logMiddleware);

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.get('/nome/:name', (req, res) => {
    return res.json({
        message: `Welcome ao ${req.appname} ${req.params.name}`
    });
});

app.listen(3000);
