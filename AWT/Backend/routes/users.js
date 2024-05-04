import express from "express";
import { getUser , searchUser, updateUser} from "../controllers/user.js";

const router = express.Router()

router.get("/find/:userId", getUser)
router.put("/", updateUser)
router.get("/search/:searchTerm", searchUser)


export default router