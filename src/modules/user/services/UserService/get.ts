import _ from 'lodash'

import { UserModel } from '@/modules/user/database/models/UserModel'
import UserRepository from '@/modules/user/repositories/UserRepository'

export default async (): Promise<Array<Pick<UserModel, 'email' | 'id' | 'name'>>> => {
    const users = await UserRepository.findAll()
    const usersWithoutPassword = _.map(users, (user) => _.pick(user, ['email', 'id', 'name']))

    return usersWithoutPassword
}
