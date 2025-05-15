import { Router } from "express";
import { addExamType, getListOfExamType } from "../controllers/examType.js";

const examTypeRoute = Router();

examTypeRoute.post('/add', addExamType);
examTypeRoute.get('/list', getListOfExamType);

export default examTypeRoute