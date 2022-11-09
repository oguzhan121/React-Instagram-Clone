import Yup from "./valide";


export const RegisterSchme = Yup.object().shape({
    email: Yup.string()
        .required()
        .email(),
    full_name: Yup.string()
        .required(),
    username: Yup.string()
        .required(),
    password: Yup.string()
        .required(),
})