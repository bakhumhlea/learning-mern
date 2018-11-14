import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../commons/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    //e.preventDefault();
    this.setState({[e.target.name]:e.target.value});
  }

  onPost(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    }

    this.props.addPost(newPost);
    this.setState({ text: '' });

    console.log("Post!");
  }

  render() {
    const { text, errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Create Post
          </div>
          <div className="card-body">
            <form onSubmit={(e) => this.onPost(e)}>
              <div className="form-group">
                <TextAreaFieldGroup 
                  placeholder="Share your opinian"
                  name="text"
                  value={text}
                  onChange={(e)=>this.onChange(e)}
                  error={errors.text}
                />
              </div>
              <button type="submit" className="btn btn-success">Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(mapStateToProps, { addPost })(PostForm);