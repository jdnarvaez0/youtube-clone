import express from "express";
import {
	deleteUser,
	dislike,
	getUser,
	like,
	subscribe,
	unsubscribe,
	update,
} from "../controllers/user.js";

const router = express.Router();

//update user
router.put("/:id", update);

//delete user
router.delete("/:id", update, deleteUser);

//get a user
router.get("/find/:id", getUser);

//subscribe user to a channel
router.put("/sub/:id", subscribe);

//unsubscribe user from a channel
router.put("/unsub/:id", unsubscribe);

//like a video
router.put("/like/:videoId", like);

//dislike a video
router.put("/dislike/:videoId", dislike);

export default router;
