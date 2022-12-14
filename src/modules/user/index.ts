import { Router } from 'express'

import addUserDataToRequest from '@/shared/middlewares/addUserDataToRequest'
import AuthController from '@/modules/user/controllers/AuthController'
import ensureAuthenticated from '@/shared/middlewares/ensureAuthenticated'
import UserController from '@/modules/user/controllers/UserController'

const userRoutes = Router()

userRoutes.post('/register', UserController.register)
userRoutes.get('/', ensureAuthenticated, UserController.get)
userRoutes.post('/login', AuthController.login)
userRoutes.post('/refresh', addUserDataToRequest, AuthController.refresh)

export default userRoutes
