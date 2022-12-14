import { NextFunction, Request, Response } from 'express'

import HttpError from '@/shared/utils/HttpError'

export default (err: Error, _request: Request, response: Response, _next: NextFunction): Response => {
    console.log(err.stack)
    if (err instanceof HttpError) {
        return response.status(err.status).json(err.toJson())
    }

    return response.status(500).json({
        status: 500,
        message: `Internal Server Error - ${err.message}`,
    })
}
