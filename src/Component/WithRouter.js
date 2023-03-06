import React, { Component } from "react";
import { withRouter } from "react-router-dom";

  class RoutewithDemo extends Component{
    constructor(props){
        super(props);
        this.handleLogin=this.handleLogin.bind(this)
    }
    handleLogin()
    {
        alert('you log it')
        this.props.history.push('/Contact')
    }
    render(){
        return(
            <div>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}
export default withRouter(RoutewithDemo)