import _ from 'lodash'

import { dataRepositories } from '@/config/database'

interface IFindReturn {
    count: number
    name: string
}

export default async (): Promise<IFindReturn[]> => {
    const result = await dataRepositories.actionRepository
        .createQueryBuilder('actions')
        .select('users.name', 'name')
        .addSelect('COUNT(users.id)', 'count')
        .innerJoin('actions.user', 'users')
        .groupBy('users.id')
        .getRawMany()

    return _.map(result, (item) => {
        return {
            count: Number(item.count),
            name: item.name,
        }
    })
}
