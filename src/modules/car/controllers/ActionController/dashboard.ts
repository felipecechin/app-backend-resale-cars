import { NextFunction, Request, Response } from 'express'

import ActionService from '@/modules/car/services/ActionService'

interface IResponseBody {
    userActions: Array<{
        name: string
        count: number
    }>
    typeActions: Array<{
        type: string
        count: number
    }>
    totalCars: number
}

export default async (
    req: Request,
    res: Response<IResponseBody>,
    next: NextFunction
): Promise<Response<IResponseBody>> => {
    const response = await ActionService.dashboard()

    return res.status(200).send(response)
}
