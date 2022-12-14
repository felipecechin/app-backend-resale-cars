import { Router } from 'express'

import CarController from './controllers/CarController'

const carRoutes = Router()

carRoutes.post('/', CarController.store)
carRoutes.put('/:id', CarController.update)
carRoutes.delete('/:id', CarController.remove)

export default carRoutes
