import BaseJoi from 'joi';
import Extension from '@joi/date';
const joi = BaseJoi.extend(Extension);


export const customersSchema = joi.object({
    name: joi.string().allow("").required(),
    phone: joi.string().min(10).max(11).required(),
    cpf: joi.number().min(11).required(),
    birthday: joi.date().format("YYYY-MM-DD").required()
})