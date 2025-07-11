const express = require("express");
const { Chat } = require("../models/chat");
const { userAuth } = require("../middlewares/auth");
const User = require('../models/user');
const chatRouter = express.Router();

chatRouter.get('/chat/:targetUserId', userAuth, async (req, res) => {
    const { targetUserId } = req.params;
    const userId = req.user._id; //userAuth gives us logged in user id
    try {
        let chat = await Chat.findOne({
            participants: { $all: [userId, targetUserId] },
        }).populate({
            path: "messages.senderId",
            select: "firstName lastName"
        })

        if (!chat) {
            chat = await new Chat({
                participants: [userId, targetUserId],
                messages: []
            })
            await chat.save()
        }
        res.json(chat)
    }

    catch (err) {
        console.log(err)
    }
})


module.exports = chatRouter;