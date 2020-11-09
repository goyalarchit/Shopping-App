import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import Home from './Home';

class App extends Component {
	render() {
		return (
				<Router>
					<div className="App">
					<Switch>
						<Route exact path="/register" component={Registration} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/home" component={Home} />
						if(sessionState.getItem("user_name")==null){
							<Redirect to="/login" />
						}
						else{
							<Redirect to="/home" />
						}
					</Switch>
					</div>
				</Router>
		);
	}
}
export default App;
