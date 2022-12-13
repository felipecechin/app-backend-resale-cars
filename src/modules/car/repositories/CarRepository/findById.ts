import { CarModel } from '@/modules/car/database/models/CarModel'
import { dataRepositories } from '@/config/database'
import HttpError from '@/shared/utils/HttpError'

export default async (id: number): Promise<CarModel> => {
    const car = await dataRepositories.carRepository.findOneBy({ id })

    if (car === null) {
        throw new HttpError(404, 'Car not found')
    }

    return car
}
