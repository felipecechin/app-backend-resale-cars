import { Router } from 'express'

import ensureAuthenticated from '@/shared/middlewares/ensureAuthenticated'
import TodoController from '@/modules/todo/controllers/TodoController'

const todoRoutes = Router()

todoRoutes.get('/', TodoController.get)
todoRoutes.post('/', ensureAuthenticated, TodoController.store)
todoRoutes.put('/:id', ensureAuthenticated, TodoController.update)
todoRoutes.delete('/:id', ensureAuthenticated, TodoController.remove)

export default todoRoutes
