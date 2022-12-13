import TodoRepository from '@/modules/todo/repositories/TodoRepository/index'
import TodoValidations from '@/modules/todo/validations/TodoValidations'
import validateSchema from '@/shared/utils/validateSchema'

interface IParams {
    id: number
}

export default async (data: IParams): Promise<number> => {
    await validateSchema(TodoValidations.remove, data)

    const removed = await TodoRepository.removeById(data.id)

    return removed
}
