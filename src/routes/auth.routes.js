import { Router } from "express";
import authController from "../controllers/auth.controller";
import { signIn } from "../middlewares";

const router = Router();

router.post("/signup", [signIn.checkDuplicatedUsernameOrEmail, signIn.checkExistingRoles], authController.signup);

router.post("/signin", authController.signin);

export default router;