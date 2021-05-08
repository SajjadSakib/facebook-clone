import './App.css';
import React,{Component} from 'react';
import Header from './Header';
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import {connect} from 'react-redux';

import {changeUser} from './Actions';


const mapStateToProps = (state) =>{
  return{
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    onUserChange: (user) =>dispatch(changeUser(user))
  }
}
// auth.onAuthStateChanged(authUser => {
//   authUser
//     ? localStorage.setItem('authUser', JSON.stringify(authUser))
//     : localStorage.removeItem('authUser')
// });


class App extends Component {
  
  componentDidMount=()=>{
    const localUser= JSON.parse(localStorage.getItem('authUser'));
    if(localUser){
      this.props.onUserChange(localUser);
    }
    console.log(this.props.user)
  }
  // user = 's';
  render(){
  return (
    <>
      {!this.props.user ? <Login /> :(
        
        <div className="App">
          {}
          <Header user={this.props.user}/>
          <div className='app_body'>
            <Sidebar user={this.props.user}/>
            <Feed />
            <Widget />
          
          </div>
          </div>
       
      )}
    </>

      
    
  );
}}

export default connect(mapStateToProps,mapDispatchToProps)(App);
