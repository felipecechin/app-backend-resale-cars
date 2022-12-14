import joi from '@/libs/joi'

export default joi.object({
    page: joi.number().default(1),
    search: joi.string().default(''),
})
