import React, { Component } from 'react'
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ''
    }
  }
  componentDidMount() {
    if (this.props.profile.route) {
      this.setState({route: this.props.profile.route});
    } else {
      this.setState({route: "/"});
    }
  }
  render() {
    const { route } = this.state;
    return (
      <div>
        <h1 className="display-4">Page Not Found</h1>
        <p>Sorry, this page does not exist</p>
        <Link className="btn btn-danger" to={route}>{route==="/"?"Home":"Go Back"}</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps)(NotFound);
