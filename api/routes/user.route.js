import exress from "express";
import { test } from "../controllers/user.controller.js";

const router = exress.Router();

router.get("/test", test);

export default router;