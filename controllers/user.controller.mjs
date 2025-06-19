import { createUser, getAllUser as getAllUsers, getUser } from "../models/user.model.mjs"

export const createUserController = (req, res) => {
    try {
        const user = createUser(req.body)
        if(!user) return res.status(401).send({message: 'User Already Exist!'})
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({
            error: `Error while creating user: ${error}`
        })
    }
}

export const getUserController = (req, res) => {
    try {
        const user = getUser(req.params.id)
        if (!user) return res.status(400).send({
            message: "User not found!",
        })
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({
            error: `Error while getting user : ${error}`
        })
    }
}

export const getAllUsersController = (req, res) => {
    try {
        const users = getAllUsers()
        if (!users) return res.status(400).send({
            message: "Users not found!",
        })
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({
            error: `Error while fetching users: ${error}`,
        })
    }
}