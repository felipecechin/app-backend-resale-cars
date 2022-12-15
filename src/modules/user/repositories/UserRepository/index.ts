import create from './create'
import find from './find'
import findAll from './findAll'
import findByEmail from './findByEmail'
import findById from './findById'

const UserRepository = {
    create,
    findByEmail,
    find,
    findById,
    findAll,
}

export default UserRepository
