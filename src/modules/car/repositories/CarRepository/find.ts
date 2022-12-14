import { CarModel } from '@/modules/car/database/models/CarModel'
import { dataRepositories } from '@/config/database'

interface IFindReturn {
    total: number
    cars: CarModel[]
}

export default async (page?: number, search?: string): Promise<IFindReturn> => {
    page = page || 1
    search = search || ''
    const [items, count] = await dataRepositories.carRepository
        .createQueryBuilder('cars')
        .where('cars.brand LIKE :brand', { brand: `%${search}%` })
        .orWhere('cars.model LIKE :model', { model: `%${search}%` })
        .skip((page - 1) * 5)
        .take(5)
        .getManyAndCount()

    return {
        total: count,
        cars: items,
    }
}
