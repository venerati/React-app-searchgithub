import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Getgithub from './Getgithub.js'

class App extends Component {
  //initialize state.
  constructor(props){
      super(props);
      //this sets react to allow you to reference 'handleusernameinput' with 'this.'
      this.handleUsernameInput = this.handleUsernameInput.bind(this);
      this.state = {
        username: 'venerati'
      }
  }
  //this method takes the username argument and sets it to the state.
  handleUsernameInput(username) {
    this.setState({username})
    console.log('handleUsernameInput has fired ' + this.state.username)
    // alert('parent state is ' + this.state.username);
  }

  render() {
    const username = this.state.username;
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Github Searcher</h1>
        </header>
        <p>Type in the username you wish to search</p>
        <InputUsername value={username} onUsernameInput={this.handleUsernameInput}></InputUsername>
        <Getgithub username={this.state.username}></Getgithub>
      </div>
    );
  }
}



//this renders the input field and needs to pass this data back.
class InputUsername extends React.Component {
  constructor(props) {
    super(props);
    //sets the method to be referenced by 'this.'
    this.handleInput = this.handleInput.bind(this);
  }  
  //this method is called by the submit button then will call the method 'onusernameinput' that is stored in the props passed down from the state of 'app'. It passes the field input back to the parent component.
  handleInput(e) {
    e.preventDefault();
    console.log('handleInput has fired.')
    this.props.onUsernameInput(e.target.value);
    // alert('handleinput sees ' + e.target.value);
  }

  render () {
    const username = this.props.username;
    return (
       <form>
         <input type="text" value={username} onChangeCapture={this.handleInput} />
      </form> 
    )
  }
  
}

//create a component that handles taking in the search params from the user via an input field

//create a component that creates a tweet display box

//create a component that handles the get request / subscribes to the specified twitter user

//create a component that takes the object returned by the twitter server and takes the last 5 tweets. and places them into a new var.

//

export default App;
