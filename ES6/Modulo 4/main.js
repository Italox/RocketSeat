import api from './api';

class App{
  constructor(){
    this.repositories = []; //Inicia os repositorios vazios

    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]')
    this.listEl = document.getElementById('repo-list');

    this.registerHandlers();
  }

  registerHandlers(){ // registra os eventos
    this.formEl.onsubmit = event => this.addRepository(event);
  }
  setLoading(loading = true){
    if (loading === true){
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando'));
      loadingEl.setAttribute('id', 'loading');
      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }

  }
  async addRepository(event){
    event.preventDefault(); // Previne que o formulario tenha as ações padroes do HTML, get, post...
    const repoInput = this.inputEl.value;

    if(repoInput.length === 0){
      return;
    }

    try{
      const response = await api.get(`/repos/${repoInput}`);

      const { name, description, html_url, owner:{ avatar_url } } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });

      this.inputEl.value = '';

      this.render();
    } catch(err){
      alert('O repositorio nao existe');
    }

    this.setLoading(false);
  }

  render(){
    this.listEl.innerHTML = '';
    this.repositories.forEach(repo => {
      //Foi usado let aqui para manter essas variavéis dentro do escopo deste metodo
      let imgEl = document.createElement('img'); // Cria uma imagem dentro da lista
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name)); //Criar um texto dentro do elemento titleEl

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', 'blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      //Aqui adiciona todos os itens declarados acima dentro de <li>
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      // Aqui adiciona a list do listItemEl dentro da ul que foi instanciada no constructor
      this.listEl.appendChild(listItemEl);

    }); //forEach() Percorre por toda a array sem retornar nada, não faz alterações na array como o .map
  }
}

// const meuApp = new App(); <<< Instanciamento de class, chama a class.


new App(); //Instanciamento sem constante
