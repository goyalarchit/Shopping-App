import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import "../bootstrap.min.css"
import Products from './ViewProduct'; 

 class Logout extends Component{
    render(){
        return(
        sessionStorage.removeItem('user_name')
        )
    }
}


export default class CreateUser extends Component {
    render(){
        if(sessionStorage.getItem("user_name")==null)
        {   window.location.href='/';
    }
    else
    return (
        <Router>
        
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/home/products" className="navbar-brand">App</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/home/products" className="nav-link">ViewProduct</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create User</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/logout" className="nav-link">Log Out</Link>
                  </li>
                </ul>
              </div>
            </nav>
    
            <br/>
            <Route path="/home/products" exact component={Products}/>

            <Route path="/logout" component={Logout}/>
          </div>
        </Router>
      );
    }

}