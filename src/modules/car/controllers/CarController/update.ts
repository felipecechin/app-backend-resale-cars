import { NextFunction, Request, Response } from 'express'

import { CarModel } from '@/modules/car/database/models/CarModel'
import CarService from '@/modules/car/services/CarService'
import { ICreateCar } from '@/modules/car/types/createCar'

type TRequestBody = ICreateCar

interface IResponseBody {
    car: CarModel
}

interface IRequestParams {
    id: string
}

export default async (
    req: Request<IRequestParams, any, TRequestBody>,
    res: Response<IResponseBody>,
    next: NextFunction
): Promise<Response<IResponseBody>> => {
    const car = await CarService.update({
        ...req.body,
        id: Number(req.params.id),
    })

    return res.status(200).send({ car })
}
