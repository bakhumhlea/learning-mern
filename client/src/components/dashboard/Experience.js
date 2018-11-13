import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY">
            {exp.from}
          </Moment>
          <span> - </span>
         {exp.to ? 
          (<Moment format="YYYY">{exp.to}</Moment>)
          :
          "Present"}
        </td>
        <td>
          <button 
            className="btn btn-danger fas fa-times" 
            style={{padding:'0', height:'1.5rem', width:'1.5rem', textAlign:'center',fontSize:'1rem'}}
            onClick={() => this.onDeleteClick(exp._id)}>
          </button>
        </td>
      </tr>
    ))

    const experienceTable = () => {
      if (this.props.experience.length === 0) {
        return (
          <div>
            <p className="text-muted">You have not yet provide your experience information. <span><Link to="/add-experience">Add Experience</Link></span></p>
          </div>
        );
      } else {
        return (
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Title</th>
                <th>Years</th>
                <th></th>
              </tr>
              {experience}
            </thead>
          </table>
        );
      }
    };
    
    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        {experienceTable()}
      </div>
    )
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, { deleteExperience })(Experience);
