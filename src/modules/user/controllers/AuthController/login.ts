import { NextFunction, Request, Response } from 'express'

import AuthService from '@/modules/user/services/AuthService'
import { UserModel } from '@/modules/user/database/models/UserModel'

interface IRequestBody {
    email: string
    password: string
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
    const { email, password } = req.body
    const response = await AuthService.login({
        email,
        password,
    })

    return res.status(200).send(response)
}
