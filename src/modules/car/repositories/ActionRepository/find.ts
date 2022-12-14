import { ActionModel } from '@/modules/car/database/models/ActionModel'
import { dataRepositories } from '@/config/database'

interface IFindReturn {
    total: number
    actions: ActionModel[]
}

export default async (page?: number, user?: number, type?: string): Promise<IFindReturn> => {
    page = page || 1
    const queryBuilder = dataRepositories.actionRepository
        .createQueryBuilder('actions')
        .select('actions')
        .addSelect('cars.brand')
        .addSelect('cars.model')
        .addSelect('users.name')
        .withDeleted()
        .leftJoin('actions.car', 'cars')
        .leftJoin('actions.user', 'users')

    if (user) {
        queryBuilder.andWhere('actions.user_id = :user', { user })
    }

    if (type) {
        queryBuilder.andWhere('actions.type = :type', { type })
    }

    const [items, count] = await queryBuilder
        .skip((page - 1) * 5)
        .take(5)
        .getManyAndCount()

    return {
        total: count,
        actions: items,
    }
}
