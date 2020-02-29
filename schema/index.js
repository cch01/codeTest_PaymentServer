import Joi from "@hapi/joi";

export default Joi.object({
  payer_user_id: Joi.number()
    .min(1)
    .required(),
  payee_user_id: Joi.number()
    .min(1)
    .required(),

  amount: Joi.number()
    .min(0.1)
    .required()
});
