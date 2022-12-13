import { TodoModel } from '@/modules/todo/database/models/TodoModel'
import TodoRepository from '@/modules/todo/repositories/TodoRepository'

interface IParams {
    page: number
}

interface IReturn {
    count: number
    items: TodoModel[]
}

export default async ({ page }: IParams): Promise<IReturn> => {
    const { count, items } = await TodoRepository.find(page)

    return {
        count,
        items,
    }
}
