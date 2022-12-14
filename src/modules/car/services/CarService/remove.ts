import ActionRepository from '@/modules/car/repositories/ActionRepository'
import CarRepository from '@/modules/car/repositories/CarRepository'
import CarValidation from '@/modules/car/validations/CarValidation'
import validateSchema from '@/shared/utils/validateSchema'

interface IParams {
    id: number
}

export default async (data: IParams, userId: number): Promise<number> => {
    const validatedData = await validateSchema(CarValidation.remove, data)

    const removedCar = await CarRepository.remove(validatedData.id)

    await ActionRepository.create({
        carId: validatedData.id,
        userId,
        type: 'C',
    })

    return removedCar
}
