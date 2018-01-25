import React, { Component } from 'react';
import './App.css';
import Getgithub from './Getgithub.js'

class App extends Component {
  //initialize state.
  constructor(props){
      super(props);
      //this sets react to allow you to reference 'handleusernameinput' with 'this.'
      this.handleUsernameInput = this.handleUsernameInput.bind(this);
      this.handleEnterKeyonInput = this.handleEnterKeyonInput.bind(this);
      this.state = {
        username: 'venerati',
        //this prop will flip every time the user presses enter on the input field and trigger the api call
        change: false
      }
  }
  //this method takes the username argument and sets it to the state.
  handleUsernameInput(username) {
    this.setState({username})
    console.log('handleUsernameInput has fired ' + this.state.username)
    // alert('parent state is ' + this.state.username);
  }

  //this method is called when the user submits the username via the enter key. it is passed to the 'inputusername' comp via props.
  handleEnterKeyonInput() {
    
    if(this.state.change === true){
      console.log('change set to false')
      this.setState({change: false})
    } else {
      console.log('change set to true')
      this.setState({change: true})
    }
  }

  render() {
    const username = this.state.username;
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Github Searcher</h1>
        </header>
        <p>Type in the username you wish to search</p>
        <InputUsername value={username} onUsernameInput={this.handleUsernameInput} onUserSubmit={this.handleEnterKeyonInput}></InputUsername>
        <Getgithub username={this.state.username} change={this.state.change}></Getgithub>
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

  //this method fires when the user presses the enter key and has the input field selected.
  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit has fired')
    this.props.onUserSubmit();
  }

  render () {
    const username = this.props.username;
    return (
       <form onSubmit={event=>{ this.handleSubmit(event) }}>
         <input type="text" value={username} onSubmit={this.handlSubmit} onChangeCapture={this.handleInput} />
      </form> 
    )
  }
}

//Things to look into.
//1. user auth with tokens.
  // look into the Auth0 jwt log in function.
//2. session handling.
//3. mock up payment processing.


//order of operations
// ** the app may require a reworking of the folder structure.
// 1.set up routing in the application
//    a.create log in page
//    b.create the 'root' router page and set up links
// 2.create authentication for the front end.
//    a.install the npm package with the following code. 'npm install jwt-decode auth0-js --save'
//    b.create a 'authservice.js' file and move the handlers into the file.
// 3.create a nodejs server to be your API

export default App;
