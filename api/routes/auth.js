import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router();

//create a new user
router.post("/signup", signup);

//login
router.post("/signin", signin);

// google auth
router.post("/google", googleAuth);

export default router;
