import React from "react";
import { useFormik } from "formik";
const LoginForm = (props) => {
    const formik = useFormik({
        initialValues: {
            email: "mail@mail.com",
            password: "",
            stayLogined: false,
            showPassword: false,
        },
        onSubmit: values => {
          console.log(JSON.stringify(values, null, 4))
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
                <label htmlFor='email'>Введите свой электронный адрес</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    className='form-control'
                    aria-describedby='emailHelp'
                    placeholder='Введите электронную почту'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <small id='emailHelp' className='form-text text-muted'>
                    Никогда и никому не сообщеайте эти данные
                </small>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Пароль</label>
                <input
                    type={!formik.values.showPassword ? "password" : "text"}
                    className='form-control'
                    id='password'
                    name='password'
                    placeholder='Введите пароль'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
            </div>
            <div className='form-check'>
                <input
                    type='checkbox'
                    className='form-check-input'
                    id='showPassword'
                    name='showPassword'
                    value={formik.values.showPassword}
                    onChange={formik.handleChange}
                />
                <label className='form-check-label' htmlFor='showPassword'>
                    Показать пароль
                </label>
            </div>
            <div className='form-check'>
                <input
                    type='checkbox'
                    className='form-check-input'
                    id='stayLogined'
                    name='stayLogined'
                    value={formik.values.stayLogined}
                    onChange={formik.handleChange}
                />
                <label className='form-check-label' htmlFor='stayLogined'>
                    Не выходить
                </label>
            </div>
            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
        </form>
    );
};

const LoginPage = (props) => {
    return (
        <div>
            <h1>It's a Login Page</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
