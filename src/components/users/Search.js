import { useContext, useState } from "react"
import githubContext from "../../context/github/githubContext";

const Search = () => {

  const ctx = useContext(githubContext)
  const [text, setText] = useState('')
  const [alert, setAlert] = useState('')

  const onChange = (event) => {
    setText(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      setAlert('Please enter something')
      setTimeout(() => setAlert(''),5000)
    } else {      
      ctx.searchUser(text);      
    }
  }

  return (
    <div>
      {alert !== '' ? <p>{alert}</p> : ''}
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange}/>
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {ctx.users.length > 0 && <button className="btn btn-light btn-block" onClick={ctx.clearUsers}>Clear</button>}
    </div>
  );
}


export default Search