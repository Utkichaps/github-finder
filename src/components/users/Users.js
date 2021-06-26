import UserItem from "./UserItem"
import Spinner from "../layout/Spinner"
import PropTypes from 'prop-types';

const Users = ({users, loading}) => {  

  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  }

  return <div style={userStyle}>
    {loading && <Spinner />}
    {users.map((user) => {
      return <UserItem key={user.id} user={user}/>
    })}
  </div>
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}



export default Users;