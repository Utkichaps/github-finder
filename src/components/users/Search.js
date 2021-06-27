import { useState } from "react"
import PropTypes from 'prop-types'

const Search = (props) => {

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
      props.searchUser(text);
    }
  }

  return (
    <div>
      {alert !== '' ? <p>{alert}</p> : ''}
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange}/>
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {props.showClear && <button className="btn btn-light btn-block" onClick={props.clearUsers}>Clear</button>}
    </div>
  );
}


export default Search