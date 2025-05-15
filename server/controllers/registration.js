import Registration from '../models/registration.model.js'

const register = async(req, res) =>{
    const {name, instituteType, board, standard, medium, classType, university, degreeType, subject, exampType} = req.body;
    if(instituteType == 'School') {
        if(!board || !medium || !classType || !standard || !subject){
            console.log("All field required")
            res.status(400).json("All field required.")
            return
        }
    }
    else if(instituteType == 'College') {
        if(!university || !degreeType){
            console.log("All field required", university, degreeType)
            res.status(400).json("All field required.")
            return
        }
    }
    else if(instituteType == 'Competitive Exam Center') {
        if(!exampType){
            console.log("All field required")
            res.status(400).json("All field required.")
            return
        }
    }

    try{
        const data = await Registration.create({
            name,
            classType,
            instituteType,
            medium,
            board,
            medium,
            classType,
            standard,
            subject,
            university,
            degreeType,
            exampType
        })
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }

    
}

export default register;