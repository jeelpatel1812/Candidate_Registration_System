import ExamType from '../models/examType.model.js'

const addExamType = async(req, res) =>{
    const {examName} = req.body;
    if(!examName) {
        console.log("All field required")
        res.status(400).json("All field required.")
        return
    }

    try{
        const data = await ExamType.create({
            examName
        })
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }

    
}

const getListOfExamType = async (req, res)=> {
    try{
        const data = await ExamType.find()
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }
}

export {getListOfExamType, addExamType};