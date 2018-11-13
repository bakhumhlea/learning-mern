import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProfileByHandle } from '../../actions/profileActions';

import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../commons/Spinner';

class Profile extends Component {
  componentDidMount() {
    console.log(this.props.match.params.handle);
    if(this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if(profile === null || loading) {
      profileContent = <Spinner />
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-dark">Back to Profiles</Link>
            </div>
            <div className="col-md-6 mb-3"></div>
          </div>
          <ProfileHeader profile={profile}/>
          <ProfileAbout profile={profile} />
          <ProfileCreds experience={profile.experience} education={profile.education}/>
          <ProfileGithub profile={profile} />
        </div>
      );
    }
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {profileContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
