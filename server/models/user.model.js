import {mongoose, Schema} from 'mongoose';

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    }
},{timestamp: true})

const User = mongoose.model('User', user);
export default User;
