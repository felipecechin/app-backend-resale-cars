import 'reflect-metadata'

import { DataSource } from 'typeorm'

import { ActionModel } from '@/modules/car/database/models/ActionModel'
import { CarModel } from '@/modules/car/database/models/CarModel'
import env from '@/env'
import { RefreshTokenModel } from '@/modules/user/database/models/RefreshTokenModel'
import { UserModel } from '@/modules/user/database/models/UserModel'

export const AppDataSource = new DataSource({
    type: 'mysql',
    ...env.mySqlConnection,
    logging: false,
    entities: ['src/modules/**/database/models/*.ts'],
    migrations: ['src/modules/**/database/migrations/*.ts'],
    subscribers: [],
})

export const dataRepositories = {
    userRepository: AppDataSource.getRepository(UserModel),
    refreshTokenRepository: AppDataSource.getRepository(RefreshTokenModel),
    carRepository: AppDataSource.getRepository(CarModel),
    actionRepository: AppDataSource.getRepository(ActionModel),
}

export const createConnection = async (): Promise<DataSource> => {
    return await AppDataSource.initialize()
}
