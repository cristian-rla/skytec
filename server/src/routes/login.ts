import express from 'express'
import LoginHandler from "../handler/login";

const router = express.Router();

router.post("/",LoginHandler.verifyData)

export default router;