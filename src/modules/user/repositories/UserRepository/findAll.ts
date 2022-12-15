import { dataRepositories } from '@/config/database'
import { UserModel } from '@/modules/user/database/models/UserModel'

export default async (): Promise<UserModel[]> => {
    const users = await dataRepositories.userRepository.find()

    return users
}
