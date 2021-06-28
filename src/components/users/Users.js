import UserItem from "./UserItem"
import Spinner from "../layout/Spinner"
import PropTypes from 'prop-types';
import { useContext } from "react";
import githubContext from "../../context/github/githubContext";

const Users = () => {  

  const ctx = useContext(githubContext)

  const {loading, users} = ctx;

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



export default Users;