import joi from '@/libs/joi'

export default joi.object({
    id: joi.number().required(),
    brand: joi.string().required(),
    model: joi.string().required(),
    km: joi.number().required(),
    color: joi.string().required(),
    transmission: joi.string().required(),
})
