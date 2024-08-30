const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  company: String,
  website: String,
  location: String,
  status: {
    type: String,
    require: true,
  },
  skills: {
    type: [String],
    require: true,
  },
  bio: String,
  githubusername: String,
  experience: [
    {
      title: {
        type: String,
        require: true,
      },
      company: {
        type: String,
        require: true,
      },
      location: String,
      from: {
        type: Date,
        require: true,
      },
      to: {
        type: Date,
        require: false,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: String,
    },
  ],
  education: [
    {
      school: {
        type: String,
        require: true,
      },
      degree: {
        type: String,
        require: true,
      },
      fieldofstudy: {
        type: String,
        require: true,
      },
      from: {
        type: Date,
        require: true,
      },
      to: Date,
      current: {
        type: Boolean,
        default: false,
      },
      description: String,
    },
  ],
  social: {
    youtube: String,
    facebook: String,
    twitter: String,
    linkedin: String,
    instagram: String,
  },
  date: { type: Date, default: Date.now },
});
module.exports = Profile = mongoose.model("profile", ProfileSchema);
