import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            users: {}
            
        };
    }

    componentDidMount(userObj) {
        this.setState({});
        
        var user= JSON.parse(localStorage.getItem('user'));
        
       userService.getAll(user[0].id).then(users=>this.setState({users}));
    }

    render() {
        const { users } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {users.firstName}!</h1>
                <p>You're logged in with React & Basic HTTP Authentication!!</p>
                <h3>Users from secure api end point:</h3>
                    <ul>
                          Welcome      {users.firstName + ' ' + users.lastName}
                        
                    </ul>
               
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export { HomePage };