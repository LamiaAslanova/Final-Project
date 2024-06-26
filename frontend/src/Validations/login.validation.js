import * as Yup from "yup";
const loginValidation = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
})
export default loginValidation