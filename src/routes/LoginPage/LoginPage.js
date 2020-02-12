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
        console.log(location, history)
        const destination = (location.state || {}).from || '/backpacks'
        history.push(destination)
    }

    render(){
        return (
            <div>
                <h2>Login</h2>
                <LoginForm 
                    onLoginSuccess={this.handleLoginSuccess}
                    />
            </div>
        )
    }
}