import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>{edu.fieldofstudy}</td>
        <td>
          <Moment format="YYYY">
            {edu.from}
          </Moment>
          <span> - </span>
         {edu.to ? 
          (<Moment format="YYYY">{edu.to}</Moment>)
          :
          "Present"}
        </td>
        <td>
          <button 
            className="btn btn-danger fas fa-times" 
            style={{padding:'0', height:'1.5rem', width:'1.5rem', textAlign:'center',fontSize:'1rem'}}
            onClick={() => this.onDeleteClick(edu._id)}></button>
        </td>
      </tr>
    ));

    const educationTable = () => {
      if (this.props.education.length === 0) {
        return (
          <div>
            <p className="text-muted">You have not yet provide your education information. <span><Link to="/add-education">Add Education</Link></span></p>
          </div>
        );
      } else {
        return (
          <table className="table">
            <thead>
              <tr>
                <th>School</th>
                <th>Degree</th>
                <th>Field</th>
                <th>Years</th>
                <th></th>
              </tr>
              {education}
            </thead>
          </table>
        );
      }
    };

    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        {educationTable()}
      </div>
    )
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, { deleteEducation })(Education);
