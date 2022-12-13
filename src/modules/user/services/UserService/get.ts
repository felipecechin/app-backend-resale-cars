import _ from 'lodash'

import { UserModel } from '@/modules/user/database/models/UserModel'
import UserRepository from '@/modules/user/repositories/UserRepository'

interface IParams {
    page: number
}

interface IReturn {
    count: number
    items: Array<Pick<UserModel, 'email' | 'id' | 'name'>>
}

export default async ({ page }: IParams): Promise<IReturn> => {
    const { count, items } = await UserRepository.find(page)

    return {
        count,
        items: _.map(items, (item) => _.pick(item, ['email', 'id', 'name'])),
    }
}
