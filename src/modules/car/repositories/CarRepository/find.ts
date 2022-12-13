import { CarModel } from '@/modules/car/database/models/CarModel'
import { dataRepositories } from '@/config/database'

interface IFindReturn {
    total: number
    cars: CarModel[]
}

export default async (page?: number): Promise<IFindReturn> => {
    page = page || 1
    const [items, count] = await dataRepositories.carRepository.findAndCount({
        skip: (page - 1) * 5,
        take: 5,
    })

    return {
        total: count,
        cars: items,
    }
}
