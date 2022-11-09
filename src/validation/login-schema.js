import Yup from "./valide";


export const LoginSchme = Yup.object().shape({
    username:Yup.string()
        .required(),
    password:Yup.string()
        .required(),
})