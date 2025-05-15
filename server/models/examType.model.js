import {mongoose, Schema} from 'mongoose';

const examType = new Schema({
    examName: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref:'user',
        // required: true
    }
},{timestamp: true})

const ExamType = mongoose.model('ExamType', examType);
export default ExamType;

