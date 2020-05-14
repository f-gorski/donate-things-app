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
             <h1>Formularz rejestracji</h1>
             <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input name="email" onChange={handleChange} value={userForm.email} type="text" placeholder="Email" />
                </label>
                <label>
                    Hasło
                    <input name="passwordOne" onChange={handleChange} value={userForm.passwordOne} type="password" placeholder="Hasło" />
                </label>
                <label>
                    Hasło
                    <input name="passwordTwo" onChange={handleChange} value={userForm.passwordTwo} type="password" placeholder="Powtórz hasło" />
                </label>
                <button disabled={isInvalid} type="submit">Zarejestruj się</button>
                {error && <p>{userForm.error.message}</p>}
             </form>
        </>
    )
}

export default RegisterForm;
