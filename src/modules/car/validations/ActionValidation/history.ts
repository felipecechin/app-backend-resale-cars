import joi from '@/libs/joi'

export default joi.object({
    page: joi.number().default(1),
    user: joi.number().default(0),
    type: joi.string().default(''),
})
