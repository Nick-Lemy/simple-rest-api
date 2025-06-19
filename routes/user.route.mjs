import { Router } from "express";
import { createUserController, getAllUsersController, getUserController } from "../controllers/user.controller.mjs"

const userRouter = Router()
userRouter.get('/', getAllUsersController)
userRouter.post('/', createUserController)
userRouter.get('/:id', getUserController)

export default userRouter