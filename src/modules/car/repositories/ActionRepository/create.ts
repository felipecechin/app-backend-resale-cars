import { ActionModel } from '@/modules/car/database/models/ActionModel'
import { dataRepositories } from '@/config/database'
import HttpError from '@/shared/utils/HttpError'

interface IParams {
    userId: number
    carId: number
    type: 'C' | 'D' | 'U'
}

export default async (data: IParams): Promise<ActionModel> => {
    try {
        const createdAction = await dataRepositories.actionRepository.save(data)
        return createdAction
    } catch (error) {
        throw new HttpError(500, 'Error creating action')
    }
}
