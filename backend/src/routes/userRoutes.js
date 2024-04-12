import { Router } from "express";
import { logOutUser, loginUser, refreshAccessToken, registerUser } from "../controllers/userController.js";

import { verifyJWT } from './../middlewares/authMiddleware.js';

const router = Router();

router.route("/register").post(registerUser);

// route for login

router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyJWT, logOutUser)
router.route("/refresh-token").post(refreshAccessToken)
export default router;

