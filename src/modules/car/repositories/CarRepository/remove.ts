import { dataRepositories } from '@/config/database'
import HttpError from '@/shared/utils/HttpError'

export default async (id: number): Promise<number> => {
    try {
        const result = await dataRepositories.carRepository
            .createQueryBuilder('car')
            .softDelete()
            .where('id = :id', { id })
            .execute()
        if (result.affected) {
            return result.affected
        }
        throw new HttpError(500, 'Error removing car')
    } catch (err) {
        throw new HttpError(500, 'Error removing car')
    }
}
