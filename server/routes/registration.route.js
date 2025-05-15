import { Router } from "express";
import register from "../controllers/registration.js";

const registationRoute = Router();

console.log("here")
registationRoute.post('/submit', register);

export default registationRoute