import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { UserModel } from '@/modules/user/database/models/UserModel'

import { CarModel } from './CarModel'

@Entity('actions')
export class ActionModel {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        default: 'now()',
    })
    occurrence: Date

    @Column({
        length: 1,
    })
    type: string

    @Column({
        name: 'car_id',
    })
    carId: number

    @Column({
        name: 'user_id',
    })
    userId: number

    @ManyToOne(() => UserModel)
    @JoinColumn({ name: 'user_id' })
    user: UserModel

    @ManyToOne(() => CarModel)
    @JoinColumn({ name: 'car_id' })
    car: CarModel
}
