import { Router } from 'express'

import carModuleRoutes from '@/modules/car'
import userRoutes from '@/modules/user'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/cars', carModuleRoutes.carRoutes)
routes.use('/actions', carModuleRoutes.actionRoutes)

export default routes
