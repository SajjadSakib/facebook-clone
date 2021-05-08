import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import {auth,provider} from './Firebase';
import {connect} from 'react-redux';
import {changeUser} from './Actions';

const mapDispatchToProps = (dispatch) =>{
    return{
      onUserChange: (user) =>dispatch(changeUser(user))
    }
  }
  

class Login extends React.Component {
    signIn = () =>{
        auth.signInWithPopup(provider)
            .then((result)=>{
                localStorage.setItem('authUser', JSON.stringify(result.user));
                this.props.onUserChange(result.user)})
            .catch((error)=>alert(error));
    }
    render(){
    return (
        <div className='login'>
            <div>
                <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png'
                height='60px' width='60px' alt='facebook'/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/La_creaci%C3%B3n_de_Facebook.jpg" alt="" 
                height='70px' width='250px'/>
                <Button onClick={this.signIn}
                variant="contained" size="medium" color="primary" className='containedPrimary' style={{width:'60%'}}>
                    Sign In
                </Button>
            </div>
        </div>
    )}
}

export default connect(null,mapDispatchToProps)(Login);
