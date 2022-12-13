import { CarModel } from '@/modules/car/database/models/CarModel'
import { dataRepositories } from '@/config/database'
import HttpError from '@/shared/utils/HttpError'
import { IUpdateCar } from '@/modules/car/types/updateCar'

export default async (data: IUpdateCar): Promise<CarModel> => {
    try {
        const updatedCar = await dataRepositories.carRepository.save(data)
        return updatedCar
    } catch (error) {
        throw new HttpError(500, 'Error updating car')
    }
}
