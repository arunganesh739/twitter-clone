import express from 'express';
import { getMe, login, logout, signup } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js'; // Ensure protectRoute is imported

const router = express.Router();

router.get("/me", protectRoute, getMe); // Protect the /me route
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;  
