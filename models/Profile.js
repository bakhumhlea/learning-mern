const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, //Ref. to document in 'users' collection in DB
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  business: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  titles: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  social: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      business: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);