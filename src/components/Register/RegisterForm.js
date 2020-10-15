import React, { useContext } from 'react';
import { createUserWithEmail } from '../../firebase';
import { AppContext } from '../../context/AppContext';
import { AuthContext } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
    const { userForm, setUserForm, error, USER_INITIAL } = useContext(AppContext);
    const { setUserAuth } = useContext(AuthContext);
    const history = useHistory();

    const { register, watch, errors, handleSubmit } = useForm();

    const onSubmit = (formInputs) => {
        const { email, passwordOne } = formInputs;

        createUserWithEmail(email, passwordOne)
            .then(authUser => {
                setUserForm({ ...USER_INITIAL });
                setUserAuth({ authUser });
                history.push('/oddaj-rzeczy');
            })
            .catch(error => {
                let errorMsg = ""

                switch (error.code) {
                    case 'auth/email-already-in-use':
                        errorMsg = "Użytkownik o tym adresie już istnieje";
                        break;
                    case "auth/network-request-failed":
                        errorMsg = "Wystąpił błąd sieci. Rejestracja nie powiodła się"
                        break;
                    default:
                        break;
                }

                setUserForm({ error: errorMsg });
            });
    }

    return (
        <>
            <div className="container">
                <div className="register">
                    <h1 className="register-form__header">Załóż konto</h1>
                    <img src={require('../../assets/Decoration.svg')} className="decoration" alt="" />
                    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
                        <div className="register-box">
                            <div>
                                <label className="register-form__label" htmlFor="email">Email</label>
                                <input className="register-form__input register-form__input--focused" name="email" id="email" type="email" placeholder="Email" autocomplete="off" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                                {errors.email && <p className="register__error-msg">Nieprawidłowy adres email</p>}
                            </div>
                            <div>
                                <label className="register-form__label" htmlFor="passwordOne">Hasło</label>
                                <input className="register-form__input register-form__input--focused" name="passwordOne" id="passwordOne" type="password" placeholder="Hasło" autocomplete="off" ref={register({ required: true, minLength: 6, maxLength: 20 })} />
                                {errors.passwordOne && <p className="register__error-msg">Hasło musi mieć między 6 a 20 znaków</p>}
                            </div>
                            <div>
                                <label className="register-form__label" htmlFor="passwordTwo">Powtórz hasło</label>
                                <input className="register-form__input register-form__input--focused" name="passwordTwo" id="passwordTwo" type="password" placeholder="Hasło" autocomplete="off" ref={register({ required: true, validate: (value) => value === watch('passwordOne') })} />
                                {errors.passwordTwo && <p className="register__error-msg">Hasła muszą być zgodne</p>}
                            </div>

                            {userForm.error && <p className="register__error-msg">{userForm.error}</p>}
                        </div>

                        <div className="btn-wrapper">
                            <Link to='/logowanie' className="register-form__login-link">Zaloguj się</Link>
                            <button className="register-form__btn" type="submit">Załóż konto</button>
                        </div>

                        {error && <p>{userForm.error}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;
