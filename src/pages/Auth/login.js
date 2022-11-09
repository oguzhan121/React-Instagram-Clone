import Input from '../../components/Input';
import { AiFillFacebook } from 'react-icons/ai';
import { login } from '../../firebase.js';
import { useLocation,Link,Navigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { LoginSchme } from '../../validation/login-schema';
import classNames from 'classnames';
import Button from '../../components/Button';
import Seperator from '../../components/Separator';
import {useSelector} from "react-redux";


export default function Login() {
    const user = useSelector(state => state.auth.user)

    const location = useLocation();

    if (user) {
		return <Navigate to={location.state?.return_url || '/'} replace={true} />
	}
    const handleSubmit = async (values, actions) => {
		await login(values.username, values.password)
	}

    return (
        <>

            <div className="w-[350px] bg-white border px-[40px] pt-8 pb-2">
                <a href="#" className="flex justify-center mb-8">
                    <img className="h-[51px]" src="/images/logo.png" alt="title"></img>
                </a>


                <Formik
                    validationSchema={LoginSchme}
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, isValid, dirty, values }) => (
                        <Form className="grid gap-y-2">
                            <Input label="Phone number,username or email" name="username" />
                            <Input label="Password" type="password" name="password" />
                            <Button type="submit" disabled={!isValid || !dirty || isSubmitting} children="Log In" />
                            <Seperator />
                            <a href="#" className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook">
                                <AiFillFacebook size={20} />
                                Log in with Facebook
                            </a>
                        </Form>
                    )}

                </Formik>
                <div className="mt-2 p-4 text-sm text-center">
                    Dont'n have an account? <Link to="/auth/register" className="font-semibold text-brand">Sign Up</Link>
                </div>
            </div>


        </>
    )
}