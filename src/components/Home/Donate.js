import React, { useContext } from 'react';
import { AppContext } from '../../App';

const Donate = () => {
    const {userAuth} = useContext(AppContext);
    console.log(userAuth);
    return (
        userAuth ? <DonateForm /> : <Redirect to='/logowanie' /> 
    )
}

const DonateForm = () => {

    return (
        <form>
            <h3>Zaznacz co chcesz oddać</h3>
            <div>
                <label>
                    <input type="checkbox" />
                    Ubrania
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" />
                    Zabawki
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" />
                    Inne
                </label>
            </div>
            <div>
                <button type="submit">Dalej</button>
            </div>
        </form>
    )
}

export default Donate;
