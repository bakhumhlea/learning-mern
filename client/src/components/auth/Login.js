import React, { Component } from 'react'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your DevConnector account</p>
              <form onSubmit={(e)=> this.onSubmit(e)}>
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-control form-control-lg" placeholder="Email Address" 
                    name="email" 
                    onChange={(e)=> this.onChange(e)}/>
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className="form-control form-control-lg" placeholder="Password" 
                    name="password"
                    onChange={(e)=> this.onChange(e)}/>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
