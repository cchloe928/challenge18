const { Schema, model } = require('mongoose');
const friendSchema = require('./Reaction');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual('friendCount').get(()=>{
  return this.friends.length
})

const User = model('user', userSchema);

module.exports = User;
