import { NextFunction, Request, Response } from 'express'

import { CarModel } from '@/modules/car/database/models/CarModel'
import CarService from '@/modules/car/services/CarService'

interface IResponseBody {
    total: number
    cars: CarModel[]
}

export default async (
    req: Request,
    res: Response<IResponseBody>,
    next: NextFunction
): Promise<Response<IResponseBody>> => {
    const queryParams = req.query
    const { total, cars } = await CarService.fetch(queryParams)

    return res.status(200).send({ total, cars })
}
