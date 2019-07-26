/* eslint-disable import/no-unresolved */
import React from 'react';

import { userService } from '../../components/_services/user.service';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    userService.getAll().then(users => this.setState({ users }));
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Admin</h1>
        <p>Đây là page của admin.</p>
        <div>
          Tất cả user:
          {users && (
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  {user.firstName} {user.lastName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default AdminPage;
