import {mongoose, Schema} from 'mongoose';

const board = new Schema({
    boardName: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref:'user'
    }
},{timestamp: true})

const Board = mongoose.model('Board', board);
export default Board;

