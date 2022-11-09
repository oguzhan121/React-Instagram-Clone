import { useState } from 'react';
import Input from '../../components/Input';
import { AiFillFacebook } from 'react-icons/ai';
import { register } from '../../firebase.js';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { RegisterSchme } from '../../validation/';
import Button from '../../components/Button';
import Seperator from '../../components/Separator';

export default function Register() {
    const navigate = useNavigate();
    const location = useLocation();

    const submitHandler = async (values, actions) => {
        const response = await register(values)
        if (response) {
            navigate(location.state?.return_url || '/', {
                replace: true
            })
        }
    }
    return (
        <>

            <div className="w-[350px] bg-white border px-[40px] pt-8 pb-2">
                <a href="#" className="flex justify-center mb-4">
                    <img className="h-[51px]" src="/images/logo.png" alt="title"></img>
                </a>

                <p className="text-[17px] font-semibold text-[#8e8e8e] text-center mb-6">
                    Sign up to see photos and videos
                    from your friends.
                </p>

                <Button>
                    <AiFillFacebook size={20} />
                    Log in with Facebook
                </Button>
                <Seperator />
                <Formik
                    validationSchema={RegisterSchme}
                    initialValues={{
                        email: '',
                        full_name: '',
                        username: '',
                        password: ''
                    }}
                    onSubmit={submitHandler}
                >
                    {({ isSubmitting, isValid, dirty, values }) => (
                        <Form className="grid gap-y-2">
                            <Input label="Email" name="email" />
                            <Input label="Full Name" name="full_name" />
                            <Input label="Username" name="username" />
                            <Input label="Password" type="password" name="password" />
                            <p className="text-xs text-[#8e8e8e] py-2">
                                People who use our service may have uploaded
                                your contact information to Instagram.Learn
                                More
                                By signing up,you agree to our Terms,Data
                                Policy and Cookies Policy.
                            </p>
                            <Button type="submit" disabled={!isValid || !dirty || isSubmitting} children="Sign Up" />

                        </Form>
                    )}

                </Formik>
                <div className="mt-2 p-4 text-sm text-center">
                Do you have an account? <Link to="/auth/login" className="font-semibold text-brand">Sign In</Link>
                </div>
            </div>


        </>
    )
}