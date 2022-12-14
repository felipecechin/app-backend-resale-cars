import { ActionModel } from '@/modules/car/database/models/ActionModel'
import { dataRepositories } from '@/config/database'

interface IFindReturn {
    total: number
    actions: ActionModel[]
}

export default async (page?: number): Promise<IFindReturn> => {
    page = page || 1
    const [items, count] = await dataRepositories.actionRepository
        .createQueryBuilder('actions')
        .select('actions')
        .addSelect('cars.brand')
        .addSelect('cars.model')
        .addSelect('users.name')
        .withDeleted()
        .leftJoin('actions.car', 'cars')
        .leftJoin('actions.user', 'users')
        .skip((page - 1) * 5)
        .take(5)
        .getManyAndCount()

    return {
        total: count,
        actions: items,
    }
}
