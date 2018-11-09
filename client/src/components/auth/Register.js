import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../commons/TextFieldGroup';
//import classnames from 'classnames';
import { connect } from 'react-redux'; // use to connect Redux to our component
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);

  }
  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your DevConnector account</p>
              <form noValidate onSubmit={(e)=>this.onSubmit(e)}>
                <TextFieldGroup 
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={(e)=>this.onChange(e)}
                  error={errors.name}
                />
                <TextFieldGroup 
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={(e)=>this.onChange(e)}
                  error={errors.email}
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                <TextFieldGroup 
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={(e)=>this.onChange(e)}
                  error={errors.password}
                />
                <TextFieldGroup 
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={(e)=>this.onChange(e)}
                  error={errors.password}
                />
                <input
                  type="submit" 
                  className="btn btn-info btn-block mt-4" 
                  />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

// const mapDispatchToProps = (dispatch) => ({
//   registerUser: (userData, history) => dispatch(userData, history)
// });

export default connect(mapStateToProps, { registerUser } )(Register);