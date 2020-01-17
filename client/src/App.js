import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: []
    }
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          user: res.data
        });
        console.log(res.data, 'this is user response');
      })
      .catch(err => console.log(err));
    }

  render() {
  return (
    <div className="App" data-testid="appbody">
      <header className="App-header">
      Women's World Cup
      </header>
      <UserCard user={this.state.user}/>
    </div>
  );
}
}

export default App;
