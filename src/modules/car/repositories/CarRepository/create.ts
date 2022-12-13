import { CarModel } from '@/modules/car/database/models/CarModel'
import { dataRepositories } from '@/config/database'
import HttpError from '@/shared/utils/HttpError'
import { ICreateCar } from '@/modules/car/types/createCar'

export default async (data: ICreateCar): Promise<CarModel> => {
    try {
        const createdUser = await dataRepositories.carRepository.save(data)
        return createdUser
    } catch (error) {
        throw new HttpError(500, 'Error creating car')
    }
}
