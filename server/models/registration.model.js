import {mongoose, Schema} from 'mongoose';

const registration = new Schema({
    name: {
        type: String,
        required: true
    },
    instituteType: {
        type: String,
        enum:['Playhouse', 'School', 'College', 'Competitive Exam Center'],
        required: true
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: 'board' // as this is managed by admin may be dynamic
    },
    medium: {
        type: String,
        enum: [ 'English', 'Hindi'] // as this is not dynamic
    },
    classType: {
        type: String,
        enum : ['Pre-primary', 'Primary', 'Secondary', 'Higher Secondary'] // assumed fixed
    },
    standard: {
        type: String,
        enum : ['LKG', 'HKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th']  // assumed fixed
    },
    subject: {
        type: String
    },
    university: {
        type: String
    },
    degree: {
        type: String,
        enum: ['Bachelor', 'Master']  // assumed fixed
    },
    exampType: {
        type: Schema.Types.ObjectId, // assumed dynamic
        ref: 'examType'
    }
},{timestamp: true})

const Registration = mongoose.model('Registration', registration);
export default Registration
// institute type -> 
// school -> board -> medium -> class -> standard -> subject
// college -> uni -> degree
// comp -> examtype