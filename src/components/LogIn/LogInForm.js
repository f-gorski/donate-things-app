import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';

const LogInForm = () => {
    const { firebase, userForm, setUserForm, error, USER_INITIAL, userAuth, setUserAuth } = useContext(AppContext);
    const history = useHistory()

    console.log(userForm);
    const { email, passwordOne } = userForm;

    const handleChange = (e) => {
        const newState = { [e.target.name]: e.target.value }

        setUserForm(prevState => {
            return { ...prevState, ...newState }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, passwordOne)

        firebase
            .auth()
            .signInWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                setUserAuth({ authUser });
                console.log(authUser.user.email);
                setUserForm({ ...USER_INITIAL });
                history.push('/oddaj-rzeczy');
            })
            .catch(error => setUserForm({ error: error }));
    }

    const isInvalid =
        passwordOne === '' ||
        email === '';

    return (
        <div className="container">
            <div className="login">
                <h1 className="login-form__header">Zaloguj się</h1>
                <img src={require('../../assets/Decoration.svg')} className="decoration" />
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-box">
                        <div>
                            <label className="login-form__label" htmlFor="email">Email</label>
                            <input className="login-form__input login-form__input--focused" name="email" id="email" onChange={handleChange} value={userForm.email} type="text" placeholder="Email" autocomplete="off" />
                        </div>
                        <div>
                            <label className="login-form__label" htmlFor="passwordOne">Hasło</label>
                            <input className="login-form__input login-form__input--focused" name="passwordOne" id="passwordOne" onChange={handleChange} value={userForm.passwordOne} type="password" placeholder="Hasło" autocomplete="off" />
                        </div>
                    </div>

                    <div className="btn-wrapper">
                        <Link to='/rejestracja' className="login-form__register-link">Zarejestruj się</Link>
                        <button className="login-form__btn" disabled={isInvalid} type="submit">Zaloguj się</button>
                    </div>

                    {error && <p>{userForm.error.message}</p>}
                </form>
            </div>
        </div>
    )
}

export default LogInForm;