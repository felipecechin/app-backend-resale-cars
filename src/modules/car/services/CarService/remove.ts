import CarRepository from '@/modules/car/repositories/CarRepository'
import CarValidation from '@/modules/car/validations/CarValidation'
import validateSchema from '@/shared/utils/validateSchema'

interface IParams {
    id: number
}

export default async (data: IParams): Promise<number> => {
    const validatedData = await validateSchema(CarValidation.remove, data)

    const removedCar = await CarRepository.remove(validatedData.id)

    return removedCar
}
