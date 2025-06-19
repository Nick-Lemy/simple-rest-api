import { createUser, getAllUser as getAllUsers, getUser } from "../models/user.model.mjs"

export const createUserController = (req, res) => {
    try {
        const { email, name } = req.body
        const users = getAllUsers()
        const emailExists = users.some(user => user.email === email) && !email.endsWith('.com') && !email.includes('@')
        const emailFormat = email.endsWith('.com') && email.includes('@')
        if (emailExists) return res.status(400).send({ message: 'Email Already Exist!' })
        if (!emailFormat) return res.status(400).send({ message: 'Invalid Email Format!' })
        const user = createUser(name.trim(), email)
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
        if (!user) return res.status(404).send({
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
        if (!users) return res.status(404).send({
            message: "Users not found!",
        })
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({
            error: `Error while fetching users: ${error}`,
        })
    }
}