import React, { Component } from 'react';

const githubUrl = username =>'https://api.github.com/users/' + username;

class Getgithub extends Component { 
    //initialize state.
  constructor(props){
      super(props);
      this.state = {
          username: this.props.username,
          change:this.props.change
      }
  }

  searchGithub(){
    
    //Fetch reaches out to github and searches via username that will be passed in via input form.
    console.log('searchGithub has fired ' + this.props.username)
    fetch(githubUrl(this.props.username))
        .then(d => d.json())
        .then(d => {
            //binds the response from the server 'd' to the state object under 'githubData'.
            this.setState({
                githubData: d
            })
        })
  }

  //this method looks at the state and watches for a change. when there is a change it will run its contents and the if statement will see if the local version of 'change' is the same as the parent's version. If there is a diff it will run a search. It then changes the local value to the same as the parent value.
  componentDidUpdate(){
    console.log('the componentDidUdate method fired.')
    if (this.state.change !== this.props.change) {
        this.searchGithub();
        this.setState({change: this.props.change})
        console.log('The state.change and props.change didnt match and the local state.change has been updated to reflect the app state.change value')
    }
  }

  //When the component is mounted to the dom then it will fire.
  componentDidMount() {
    this.searchGithub()
  }

  render() {
    if(!this.state.githubData) return <p>loading...</p>
    return (   
      <div>
        <div>
            <button onClickCapture={()=> this.searchGithub()}>Search</button>
        </div>
            <img alt="Github user avatar" src={this.state.githubData.avatar_url} height='100' ></img>
            <h2>{this.state.githubData.name}</h2>
            <h3>Number of repos: {this.state.githubData.public_repos}</h3>
            <p>Followers: {this.state.githubData.followers}</p>
            <p>Following: {this.state.githubData.following}</p>   
      </div>
    )
  }
}

export default Getgithub;