import ActionRepository from '@/modules/car/repositories/ActionRepository'
import { CarModel } from '@/modules/car/database/models/CarModel'
import CarRepository from '@/modules/car/repositories/CarRepository'
import CarValidation from '@/modules/car/validations/CarValidation'
import { IUpdateCar } from '@/modules/car/types/updateCar'
import validateSchema from '@/shared/utils/validateSchema'

export default async (data: IUpdateCar, userId: number): Promise<CarModel> => {
    const validatedData = await validateSchema(CarValidation.update, data)

    const updatedCar = await CarRepository.update(validatedData)

    await ActionRepository.create({
        carId: updatedCar.id,
        userId,
        type: 'U',
    })

    return updatedCar
}
