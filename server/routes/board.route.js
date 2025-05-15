import { Router } from "express";
import { getListOfBoard, addBoard } from "../controllers/board.js";

const boardRoute = Router();

boardRoute.post('/add', addBoard);
boardRoute.get('/list', getListOfBoard);

export default boardRoute