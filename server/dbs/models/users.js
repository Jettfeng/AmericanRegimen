import mongoose from 'mongoose'
const Schema = mongoose.Schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true, //唯一的
    required: true //必选的
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

export default mongoose.model('User', UserSchema)
