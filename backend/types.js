const zod = require('zod');

const signUpBody = zod.object({
    firstName: zod.string().min(3),
    lastName: zod.string().min(3),
    email: zod.string().email(),
    password: zod.string().min(6)
})

const signInBody = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})

module.exports = {
    signUpBody,
    signInBody
}