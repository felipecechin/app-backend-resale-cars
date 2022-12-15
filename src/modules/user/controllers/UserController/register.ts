import { NextFunction, Request, Response } from 'express'

import { UserModel } from '@/modules/user/database/models/UserModel'
import UserService from '@/modules/user/services/UserService'

interface IRequestBody {
    name: string
    email: string
    password: string
    confirmPassword: string
}

interface IResponseBody {
    access_token: string
    refresh_token: string
    user: Pick<UserModel, 'email' | 'id' | 'name'>
}

export default async (
    req: Request<any, any, IRequestBody>,
    res: Response<IResponseBody>,
    next: NextFunction
): Promise<Response<IResponseBody>> => {
    const response = await UserService.register({
        ...req.body,
    })

    return res.status(200).send(response)
}
