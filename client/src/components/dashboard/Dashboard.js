import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import ProfileActions from './ProfileActions';

import Spinner from '../commons/Spinner';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: ''
    }
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if(profile === null || loading) {
      dashboardContent = <Spinner/>
    } else {
      // Check of logged in user has profile data
      if(Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <h1>Welcome, <Link to={`/profile/${profile.handle}`}>{user.name}</Link></h1>
            <ProfileActions />
            {/** TODO: EXP and EDU */}
            <div style={{ marginBottom: '60px' }}>

            </div>
            <button onClick={(e)=>this.onDeleteClick(e)} className="btn btn-danger">Delete Account</button>
          </div>
        );
      } else {
        // User has no profile
        dashboardContent = (
          <div>
            <h1>Welcome, {user.name}</h1>
            <p className="lead text-muted">You have not yet setup profile</p>
            <Link to="/profile" className="btn btn-warning">Create Profile</Link>
            <div style={{ marginBottom: '60px' }}>

            </div>
            <button onClick={(e)=>this.onDeleteClick(e)} className="btn btn-danger">Delete Account</button>
          </div>
        )
      }
    }

    return (
      <div className="dashboard">
        {dashboardContent}
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
