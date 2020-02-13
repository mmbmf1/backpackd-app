import React from 'react'
import ItemsContext from '../../contexts/ItemContext'
import LoginForm from '../../components/LoginForm/LoginForm'
import TokenService from '../../services/token-service'

export default class LoginPage extends React.Component {
    static contextType = ItemsContext

    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const user_name = TokenService.getUser()
        // console.log(this.context.user_id)
        // console.log(location, history)
        const destination = (location.state || {}).from || `/backpacks/${user_name}`
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