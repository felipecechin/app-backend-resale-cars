import ActionRepository from '@/modules/car/repositories/ActionRepository'
import CarRepository from '@/modules/car/repositories/CarRepository'

interface IReturn {
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

export default async (): Promise<IReturn> => {
    const userActions = await ActionRepository.findGroupByUsers()
    const typeActions = await ActionRepository.findGroupByType()
    const carsResult = await CarRepository.find()

    return {
        userActions,
        typeActions,
        totalCars: carsResult.total,
    }
}
