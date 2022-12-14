import joi from '@/libs/joi'

export default joi.object({
    brand: joi.string().required(),
    model: joi.string().required(),
    km: joi.number().required(),
    color: joi.string().required(),
    transmission: joi.string().required(),
})
