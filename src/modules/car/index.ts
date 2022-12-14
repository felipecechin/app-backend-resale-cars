import { Router } from 'express'

import ensureAuthenticated from '@/shared/middlewares/ensureAuthenticated'

import ActionController from './controllers/ActionController'
import CarController from './controllers/CarController'

const carRoutes = Router()

carRoutes.post('/', ensureAuthenticated, CarController.store)
carRoutes.put('/:id', ensureAuthenticated, CarController.update)
carRoutes.delete('/:id', ensureAuthenticated, CarController.remove)
carRoutes.get('/', ensureAuthenticated, CarController.fetch)

const actionRoutes = Router()

actionRoutes.get('/history', ensureAuthenticated, ActionController.history)
actionRoutes.get('/dashboard', ensureAuthenticated, ActionController.dashboard)

export default {
    carRoutes,
    actionRoutes,
}
