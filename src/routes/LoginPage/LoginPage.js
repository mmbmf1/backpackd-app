import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

export default class LoginPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        // console.log(location, history)
        const destination = (location.state || {}).from || '/'
        history.push(destination)
        // console.log(destination)
    }

    render(){
        return (
            <section>
                <h2>Login</h2>
                <LoginForm 
                    onLoginSuccess={this.handleLoginSuccess}
                    />
            </section>
        )
    }
}