import { Router } from "express";
import usersController from "../controllers/users.controller";
import { auth } from "../middlewares";

const router = Router();

router.get("/", auth.verifyToken, usersController.getUsers);

export default router;