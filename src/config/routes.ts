import { Router } from 'express'

import carsRoutes from '@/modules/car'
import userRoutes from '@/modules/user'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/cars', carsRoutes)

export default routes
