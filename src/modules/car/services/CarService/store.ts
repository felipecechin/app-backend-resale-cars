import { CarModel } from '@/modules/car/database/models/CarModel'
import CarRepository from '@/modules/car/repositories/CarRepository'
import CarValidation from '@/modules/car/validations/CarValidation'
import { ICreateCar } from '@/modules/car/types/createCar'
import validateSchema from '@/shared/utils/validateSchema'

export default async (data: ICreateCar): Promise<CarModel> => {
    const validatedData = await validateSchema(CarValidation.store, data)

    const createdCar = await CarRepository.create(validatedData)

    return createdCar
}
