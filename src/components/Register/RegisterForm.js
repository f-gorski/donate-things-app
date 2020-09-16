import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';

const RegisterForm = () => {
    const {firebase, userForm, setUserForm, error, userInitial, userAuth, setUserAuth} = useContext(AppContext);
    const history = useHistory();

    console.log(userForm);
    const {email, passwordOne, passwordTwo} = userForm;

    const handleChange = (e) => {
        const newState = {[e.target.name]: e.target.value}
        

        setUserForm(prevState => {
            return {...prevState, ...newState}
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, passwordOne)

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            setUserForm({ ...userInitial });
            setUserAuth({authUser});
            console.log(authUser.user.email);
            history.push('/oddaj-rzeczy');
        })
        .catch(error => {
            setUserForm({ error: error});
        });
    }

    const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '';

    return (

        <>
            <div className="container">
                <div className="register">
                    <h1 className="register-form__header">Załóż konto</h1>
                    <img src={require('../../assets/Decoration.svg')} className="decoration" />
                    <form onSubmit={handleSubmit} className="register-form">
                        <div className="register-box">
                            <div>
                                <label className="register-form__label">Email</label>
                                <input className="register-form__input register-form__input--focused" name="email" onChange={handleChange} value={userForm.email} type="email" placeholder="Email" autocomplete="off" />
                            </div>
                            <div>
                                <label className="register-form__label">Hasło</label>
                                <input className="register-form__input register-form__input--focused" name="passwordOne" onChange={handleChange} value={userForm.passwordOne} type="password" placeholder="Hasło" autocomplete="off" />
                            </div>
                            <div>
                                <label className="register-form__label">Powtórz hasło</label>
                                <input className="register-form__input register-form__input--focused" name="passwordTwo" onChange={handleChange} value={userForm.passwordTwo} type="password" placeholder="Hasło" autocomplete="off" />
                            </div>
                        </div>

                    <div className="btn-wrapper">
                        <Link to='/logowanie' className="register-form__login-link">Zaloguj się</Link>
                        <button className="register-form__btn" disabled={isInvalid} type="submit">Załóż konto</button>
                    </div>

                    {error && <p>{userForm.error.message}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;
