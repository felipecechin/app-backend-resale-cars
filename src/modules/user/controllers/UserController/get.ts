import { NextFunction, Request, Response } from 'express'

import { UserModel } from '@/modules/user/database/models/UserModel'
import UserService from '@/modules/user/services/UserService'

interface IResponseBody {
    users: {
        count: number
        items: Array<Pick<UserModel, 'email' | 'id' | 'name'>>
    }
}

export default async (
    req: Request,
    res: Response<IResponseBody>,
    next: NextFunction
): Promise<Response<IResponseBody>> => {
    const { page } = req.query
    const users = await UserService.get({ page: Number(page) })

    return res.status(200).send({ users })
}
