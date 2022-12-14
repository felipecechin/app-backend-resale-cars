import { ActionModel } from '@/modules/car/database/models/ActionModel'
import ActionRepository from '@/modules/car/repositories/ActionRepository'
import ActionValidation from '@/modules/car/validations/ActionValidation'
import validateSchema from '@/shared/utils/validateSchema'

interface IParams {
    page: number
}

interface IReturn {
    total: number
    actions: ActionModel[]
}

export default async (data: IParams): Promise<IReturn> => {
    const validatedQueryParams = await validateSchema(ActionValidation.history, data)

    const response = await ActionRepository.find(validatedQueryParams.page)

    return response
}
