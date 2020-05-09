import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';

const LogInForm = () => {
    const {firebase, userForm, setUserForm, error, USER_INITIAL, userAuth, setUserAuth} = useContext(AppContext);
    const history = useHistory()

    console.log(userForm);
    const {email, passwordOne} = userForm;

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
        .signInWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            setUserAuth({authUser});
            console.log(authUser.user.email);
            setUserForm({ ...USER_INITIAL });
            history.push('/oddaj-rzeczy');
        })
        .catch(error => setUserForm({ error: error}));
    }

    const isInvalid =
            passwordOne === '' ||
            email === '';

    return (
        <>
             <h1>Formularz logowania</h1>
             <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input name="email" onChange={handleChange} value={userForm.email} type="text" placeholder="Email" />
                </label>
                <label>
                    Hasło
                    <input name="passwordOne" onChange={handleChange} value={userForm.passwordOne} type="password" placeholder="Hasło" />
                </label>
                
                <button disabled={isInvalid} type="submit">Zaloguj się</button>
                <Link to='/rejestracja'>Zarejestruj się</Link>
                {error && <p>{userForm.error.message}</p>}
             </form>
        </>
    )
}

export default LogInForm;