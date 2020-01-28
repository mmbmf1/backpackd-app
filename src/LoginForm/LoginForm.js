import React from 'react'

function LoginForm() {
    return(
        <form className='LoginForm'>
            <div className='user_name'>
                <label htmlFor='LoginForm__user_name'>
                    User Name
                </label>
                <input required name='user_name' id='LoginForm__user_name'></input>
            </div>
            <div className='password'>
                <label htmlFor='LoginForm__password'>
                    Password
                </label>
                <input required name='password' type='password' id='LogfinFrom__password'></input>
            </div>
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm;