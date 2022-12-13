import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('cars')
export class CarModel {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    brand: string

    @Column()
    model: string

    @Column()
    km: string

    @Column()
    color: string

    @Column()
    transmission: string

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
    })
    deletedAt: Date | null
}
