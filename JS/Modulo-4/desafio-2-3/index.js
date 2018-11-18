let inputElement = document.querySelector('.container input#user');
const buttonElement = document.querySelector('.container button#botaoBusca');
let listElement = document.querySelector('.container ul.list-group');
let repos = [];

function renderRepos(){
    for(repo of repos){
        const repoElement = document.createElement('li');
        repoElement.setAttribute('class', 'list-group-item');
        const repoText = document.createTextNode(repo);

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
}

  function renderLoading(loading) {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
  }
  function renderError(loading) {
      listElement.innerHTML = "";
      var textElement = document.createTextNode('Erro!');
      var errorElement = document.createElement('li');
      errorElement.style.color = "#F00";
      errorElement.appendChild(textElement);
      listElement.appendChild(errorElement);
    }

function findRepo(){
    //Reseta a array para poder ter uma nova consulta sem mesclar.
    repos = [];
    renderLoading();
    const repoUser = inputElement.value;
    
    axios.get(`https://api.github.com/users/${repoUser}/repos`)
    .then(function(response){   
        const data = response.data;      
        for(repo of data){
            repos.push(repo.name);
        }

        //Reseta o input para deixá-lo em branco
        inputElement.value = '';

        //Apaga as <li> quando tem <li> de repositorios na tela, para uma nova consulta.
        var liList = listElement.getElementsByTagName("li");

        if(liList.length > 0){
            listElement.innerHTML = '';
        }

        renderRepos();
    })
    .catch(function(error){
        renderError();
    })
    ;
};

buttonElement.onclick = findRepo;

