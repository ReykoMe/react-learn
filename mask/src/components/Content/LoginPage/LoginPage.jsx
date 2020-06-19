import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import { userLogin } from "../../../redux/reducers/auth-reducer";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [showPass, changeShowpass] = useState(true); //хук для чекбокса отображения пароля
    //валидация формы
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .min(5, "To small email adress")
            .max(50, "It's too long email, call Police!!! :) or type correct adress")
            .required("Please, enter your email")
            .email("Email adress is not valid"),

        password: Yup.string()
            .min(5, "Password must be longer")
            .max(50, "This password is too strong")
            .required("Please, enter your password"),
    });
                         
    const initialValues = { email: "", password: "", rememberMe: false };
    return (
        <>
            <h1>It's a Login Page</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnMount={true}
                onSubmit={(values) => dispatch(userLogin(values))}>
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='email'>Введите свой электронный адрес</label>
                            <input
                                type='email'
                                id='login'
                                name='email'
                                className='form-control'
                                aria-describedby='emailHelp'
                                placeholder='Введите электронную почту'
                                value={props.values.email}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            {props.errors.email && <p className='text-danger'>{props.errors.email}</p>}
                            <small id='emailHelp' className='form-text text-muted'>
                                Никогда и никому не сообщеайте эти данные
                            </small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Пароль</label>
                            <input
                                type={showPass ? "password" : "text"}
                                className='form-control'
                                id='password'
                                name='password'
                                placeholder='Введите пароль'
                                value={props.values.password}
                                onChange={props.handleChange}
                            />
                        </div>
                        {props.errors.password && <p className='text-danger'>{props.errors.password}</p>}
                        <div className='form-check'>
                            <input
                                type='checkbox'
                                className='form-check-input'
                                id='showPassword'
                                name='showPassword'
                                value={showPass}
                                onChange={() => changeShowpass(!showPass)}
                            />
                            <label className='form-check-label' htmlFor='showPassword'>
                                Показать пароль
                            </label>
                        </div>
                        <div className='form-check'>
                            <input
                                type='checkbox'
                                className='form-check-input'
                                id='rememberMe'
                                name='rememberMe'
                                value={props.values.rememberMe}
                                onChange={props.handleChange}
                            />
                            <label className='form-check-label' htmlFor='stayLogined'>
                                Не выходить
                            </label>
                        </div>
                        <button type='submit' className='btn btn-primary' disabled={!props.isValid}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </>
    );
};

const LoginPage = () => {
    const authStore = useSelector((state) => state.auth);
    if (authStore.authorised) {
        return <Redirect to={"/profile"} />;
    }
    return <LoginForm />;
};

export default LoginPage;
