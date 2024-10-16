import { currentUser, requireAuth } from "@hieuhochanh/common";
import express from "express"
import jwt from "jsonwebtoken"

const router = express.Router()

router.get("/api/users/currentuser", currentUser, requireAuth, (req, res) => {
    res.send({ currentUser: req.currentUser || null })
});

export { router as currentUserRouter };