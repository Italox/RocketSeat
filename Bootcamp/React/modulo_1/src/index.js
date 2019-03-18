import React, { Component, Fragment } from 'react'; // Chama o react dentro do documento, todo JSX no ReactJS precisa desse import
import { render } from 'react-dom'; // Importa a o metodo render do react-dom para poder utilizar o render no final do código
import Button from './Button';
import './style.scss';

class App extends Component {
    state = {
      counter: 0,
    }

    handleClick = () => {
      const { counter } = this.state;
      this.setState({
        counter: counter + 1,
      });
    }

    render() {
      const { counter } = this.state;
      return (
        <Fragment>
          <h1>Hello RocketSeat</h1>
          <h2>{counter}</h2>
          <Button onClick={this.handleClick}>Somar</Button>
        </Fragment>
      ); // JSX dentro do javascript
    }
}

render(<App />, document.getElementById('app')); // Escolhe onde irá renderizar o component
