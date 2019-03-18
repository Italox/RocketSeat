import React, { Component } from 'react';
import moment from 'moment';
import { Container, Form } from './styles';
import Logo from '../../assets/logo.png';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {
    state = {
      repositoryError: false,
      repositoryInput: '',
      repositories: [],
    };

    componentWillMount() {
      localStorage.getItem('repositorios') && this.setState({
        repositories: JSON.parse(localStorage.getItem('repositorios')),
        loading: false,
      });
    }

    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('repositorios', JSON.stringify(nextState.repositories));
    }

    handleAddRepository = async (e) => {
      e.preventDefault(); // Tira a função padrão do html de redirecionar quando clica no button

      this.setState({ loading: true });

      // Chamada á API fazendo a referência ao link com base no que foi preenchido no input
      try {
        const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

        repository.lastCommit = moment(repository.pushed_at).fromNow();

        // Retrieve

        this.setState({
          loading: false,
          repositoryInput: '',
          repositories: [...this.state.repositories, repository],
          repositoryError: false,
        });
      } catch (err) {
        this.setState({ repositoryError: true });
      } finally {
        this.setState({ loading: false });
      }
    }

    removeRepo = async (repo) => {
      const newRepos = this.state.repositories.filter(repository => repository.full_name !== repo);
      this.setState({
        repositories: [...newRepos],
      });
      await localStorage.setItem('repositorios', JSON.stringify(newRepos));
    }

    atualiza = async (id) => {
      const { repositories } = this.state;

      const repository = repositories.find(repo => repo.id === id.id);

      try {
        const { data } = await api.get(`/repos/${repository.full_name}`);

        data.lastCommit = moment(data.pushed_at).fromNow();

        this.setState({
          repositoryError: false,
          repositoryInput: '',
          repositories: repositories.map(repo => (repo.id === data.id ? data : repo)),
        });

        await localStorage.setItem('repositorios', JSON.stringify(repositories));
      } catch (err) {
        this.setState({ repositoryError: true });
      }
    }

    render() {
      return (
        <Container>
          <img src={Logo} alt="Git Compare" />
          <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="usuario/repositorio"
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              {this.state.loading ? <i className="fa fa-spinner fa-spin" /> : 'OK'}
            </button>
          </Form>
          <CompareList repositories={this.state.repositories} remove={this.removeRepo} atualiza={this.atualiza} />
        </Container>
      );
    }
}
