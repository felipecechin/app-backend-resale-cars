import _ from 'lodash'
import bcrypt from 'bcrypt'

import generateJwtAndRefreshToken from '@/modules/user/utils/generateJwtAndRefreshToken'
import HttpError from '@/shared/utils/HttpError'
import { UserModel } from '@/modules/user/database/models/UserModel'
import UserRepository from '@/modules/user/repositories/UserRepository'
import UserValidations from '@/modules/user/validations/UserValidations'
import validateSchema from '@/shared/utils/validateSchema'

interface IParams {
    name: string
    email: string
    password: string
    confirmPassword: string
}

interface IReturn {
    access_token: string
    refresh_token: string
    user: Pick<UserModel, 'email' | 'id' | 'name'>
}

export default async (data: IParams): Promise<IReturn> => {
    const { name, email, password, confirmPassword } = await validateSchema(UserValidations.register, data)

    const userExists = await UserRepository.findByEmail(email)

    if (userExists) {
        throw new HttpError(400, 'User already exists')
    }

    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
        throw new HttpError(400, 'Password and confirm password do not match')
    }

    const newUser = {
        name,
        email,
        password: passwordHash,
    }

    const createdUser = await UserRepository.create(newUser)

    const userWithoutPassword = _.omit(createdUser, 'password')
    const tokens = await generateJwtAndRefreshToken(userWithoutPassword.id, userWithoutPassword)

    return {
        access_token: tokens.accessToken,
        refresh_token: tokens.refreshToken,
        user: userWithoutPassword,
    }
}
