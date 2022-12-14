import { NextFunction, Request, Response } from 'express'

import { ActionModel } from '@/modules/car/database/models/ActionModel'
import ActionService from '@/modules/car/services/ActionService'

interface IResponseBody {
    total: number
    actions: ActionModel[]
}

export default async (
    req: Request,
    res: Response<IResponseBody>,
    next: NextFunction
): Promise<Response<IResponseBody>> => {
    const queryParams = req.query
    const { total, actions } = await ActionService.history(
        queryParams as unknown as { page: number; user: number; type: string }
    )

    return res.status(200).send({ total, actions })
}
