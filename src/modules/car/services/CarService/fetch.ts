import { CarModel } from '@/modules/car/database/models/CarModel'
import CarRepository from '@/modules/car/repositories/CarRepository'
import CarValidation from '@/modules/car/validations/CarValidation'
import validateSchema from '@/shared/utils/validateSchema'

interface IParams {
    search: string
    page: number
}

interface IReturn {
    total: number
    cars: CarModel[]
}

export default async (data: IParams): Promise<IReturn> => {
    const validatedQueryParams = await validateSchema(CarValidation.fetch, data)

    const response = await CarRepository.find(validatedQueryParams.page, validatedQueryParams.search)

    return response
}
