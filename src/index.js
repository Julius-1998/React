import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {from: '',to: '',num:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
  }

  componentDidMount(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('/testAPI', requestOptions)
        .then(response => console.log(response));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          From:
          <input name = "from" type="text" value={this.state.from} onChange={this.handleChange} />
          To:
          <input name = "to" type="text" value={this.state.to} onChange={this.handleChange} />
          Num:
          <input name = "num" type="text" value={this.state.num} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// ========================================

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);