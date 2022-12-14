import { NextFunction, Request, Response } from 'express'

import CarService from '../../services/CarService'

interface IResponseBody {
    removed: number
}

export default async (
    req: Request,
    res: Response<IResponseBody>,
    next: NextFunction
): Promise<Response<IResponseBody>> => {
    const removed = await CarService.remove(
        {
            id: Number(req.params.id),
        },
        Number(req.user?.id)
    )

    return res.status(200).send({ removed })
}
