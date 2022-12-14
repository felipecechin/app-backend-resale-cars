import ActionRepository from '@/modules/car/repositories/ActionRepository'
import { CarModel } from '@/modules/car/database/models/CarModel'
import CarRepository from '@/modules/car/repositories/CarRepository'
import CarValidation from '@/modules/car/validations/CarValidation'
import { ICreateCar } from '@/modules/car/types/createCar'
import validateSchema from '@/shared/utils/validateSchema'

export default async (data: ICreateCar, userId: number): Promise<CarModel> => {
    const validatedData = await validateSchema(CarValidation.store, data)

    const createdCar = await CarRepository.create(validatedData)

    await ActionRepository.create({
        carId: createdCar.id,
        userId,
        type: 'C',
    })

    return createdCar
}
