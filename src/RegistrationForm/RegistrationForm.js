import React from 'react'

function RegistrationForm() {
    return(
        <form className='RegistrationForm'>
            <div className='first_name'>
                <label htmlFor='Registration__first_name'>
                    First Name
                </label>
                <input name='first_name' type='text' required id='RegistrationForm__first_name'></input>
            </div>
            <div className='last_name'>
                <label htmlFor='RegistrationForm__last_name'>
                    Last Name
                </label>
                <input name='last_name' type='text' required id='RegistrationForm__last_name'></input>
            </div>
            <div className='user_email'>
                <label htmlFor='RegistrationForm__user_email'>
                    Email
                </label>
                <input name='user_email' type='email' required id='RegistrationForm__user_email' autoComplete='on'></input>
            </div>
            <div className='user_name'>
                <label htmlFor='Registration__user_name'>
                    User Name
                </label>
                <input name='user_name' type='text' required id='RegistrationForm__user_name'></input>
            </div>
            <div className='password'>
                <label htmlFor='Registration__password'>
                    Password
                </label>
                <input name='password' type='password' required id='RegistrationFrom__password'></input>
            </div>
            <button type='submit'>Register</button>
        </form>
    )
}

export default RegistrationForm;