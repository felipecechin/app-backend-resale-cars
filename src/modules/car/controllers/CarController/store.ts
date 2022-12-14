import { NextFunction, Request, Response } from 'express'

import { CarModel } from '@/modules/car/database/models/CarModel'
import CarService from '@/modules/car/services/CarService'
import { ICreateCar } from '@/modules/car/types/createCar'

type TRequestBody = ICreateCar

interface IResponseBody {
    car: CarModel
}

export default async (
    req: Request<any, any, TRequestBody>,
    res: Response<IResponseBody>,
    next: NextFunction
): Promise<Response<IResponseBody>> => {
    const car = await CarService.store(
        {
            ...req.body,
        },
        Number(req.user?.id)
    )

    return res.status(200).send({ car })
}
