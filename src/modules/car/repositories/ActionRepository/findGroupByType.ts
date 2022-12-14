import _ from 'lodash'

import { dataRepositories } from '@/config/database'

interface IFindReturn {
    count: number
    type: string
}

export default async (): Promise<IFindReturn[]> => {
    const result = await dataRepositories.actionRepository
        .createQueryBuilder('actions')
        .select('type')
        .addSelect('COUNT(*)', 'count')
        .groupBy('type')
        .getRawMany()

    return _.map(result, (item) => {
        return {
            count: Number(item.count),
            type: item.type,
        }
    })
}
