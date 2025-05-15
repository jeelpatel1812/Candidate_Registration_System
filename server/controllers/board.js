import Board from '../models/board.model.js'

const addBoard = async(req, res) =>{
    const {boardName} = req.body;
    if(!boardName) {
        console.log("All field required")
        res.status(400).json("All field required.")
        return
    }

    try{
        const data = await Board.create({
            boardName
        })
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }

    
}

const getListOfBoard = async (req, res)=> {
    try{
        const data = await Board.find()
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }
}

export {getListOfBoard, addBoard};