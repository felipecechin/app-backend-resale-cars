import 'express-async-errors'
import 'dotenv/config'
import express from 'express'

import handleErrors from '@/shared/middlewares/handleErrors'
import routes from '@/config/routes'

import { createConnection } from './database'

createConnection()
    .then(() => {
        console.log('Database connected')
        // const carCreated = await dataRepositories.carRepository.save({
        //     brand: 'Fiat',
        //     model: 'Uno',
        //     km: '100000',
        //     color: 'Azul',
        //     transmission: 'Manual',
        // })
        // console.log(carCreated)
        // await dataRepositories.carRepository
        //     .createQueryBuilder('car')
        //     .softDelete()
        //     .where('id = :id', { id: 1 })
        //     .execute()
        // console.log('ok')
        // const cars = await dataRepositories.carRepository
        //     .createQueryBuilder('cars')
        //     .where('cars.brand LIKE :brand', { brand: '%gol%' })
        //     .orWhere('cars.model LIKE :model', { model: '%gol%' })
        //     .skip(0)
        //     .take(5)
        //     .getManyAndCount()
        // console.log(cars)
        // const createdAction = await dataRepositories.actionRepository.save({
        //     carId: 1,
        //     type: 'C',
        //     userId: 1,
        // })
        // console.log(createdAction)
        // const actions = await dataRepositories.actionRepository
        //     .createQueryBuilder('action')
        //     .withDeleted()
        //     .leftJoinAndSelect('action.car', 'car')
        //     .leftJoinAndSelect('action.user', 'user')
        //     .getMany()
        // console.log(actions)
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })

const app = express()

app.use(express.json())
app.use(routes)
app.use(handleErrors)

export { app }
