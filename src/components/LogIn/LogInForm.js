import React, { useContext } from 'react';
import { signInWithEmail } from '../../firebase';
import { AppContext } from '../../context/AppContext';
import { AuthContext } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LogInForm = () => {
    const { userForm, setUserForm, USER_INITIAL } = useContext(AppContext);
    const { setUserAuth } = useContext(AuthContext);

    const history = useHistory()
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (formInputs) => {
        const { email, passwordOne } = formInputs;

        signInWithEmail(email, passwordOne)
            .then(authUser => {
                setUserAuth({ authUser });
                setUserForm({ ...USER_INITIAL });
                history.push('/oddaj-rzeczy');
            })
            .catch(error => {
                let errorMsg = ""

                switch (error.code) {
                    case 'auth/wrong-password':
                        errorMsg = "Nieprawidłowe hasło";
                        break;
                    case "auth/user-not-found":
                        errorMsg = "Użytkownik nie istnieje"
                        break;
                    default: 
                        break;
                }

                setUserForm({ error: errorMsg });
            });
    }

    return (
        <div className="container">
            <div className="login">
                <h1 className="login-form__header">Zaloguj się</h1>
                <img src={require('../../assets/Decoration.svg')} className="decoration" alt="" />
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <div className="login-box">
                        <div>
                            <label className="login-form__label" htmlFor="email">Email</label>
                            <input className="login-form__input login-form__input--focused" name="email" id="email" type="email" placeholder="Email" autocomplete="off" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                            {errors.email && <p className="login__error-msg">Nieprawidłowy format adresu email</p>}
                        </div>
                        <div>
                            <label className="login-form__label" htmlFor="passwordOne">Hasło</label>
                            <input className="login-form__input login-form__input--focused" name="passwordOne" id="passwordOne" type="password" placeholder="Hasło" autocomplete="off" ref={register({ required: true })} />
                            {errors.passwordOne && <p className="login__error-msg">Podaj hasło</p>}
                        </div>
                        {userForm.error && <p className="login__error-msg">{userForm.error}</p>}
                    </div>

                    <div className="btn-wrapper">
                        <Link to='/rejestracja' className="login-form__register-link">Zarejestruj się</Link>
                        <button className="login-form__btn" type="submit">Zaloguj się</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogInForm;