import { NextFunction, Request, Response } from 'express'

import CarService from '../../services/CarService'

interface IRequestParams {
    id: string
}

interface IResponseBody {
    removed: number
}

export default async (
    req: Request<IRequestParams>,
    res: Response<IResponseBody>,
    next: NextFunction
): Promise<Response<IResponseBody>> => {
    const removed = await CarService.remove({
        id: Number(req.params.id),
    })

    return res.status(200).send({ removed })
}
