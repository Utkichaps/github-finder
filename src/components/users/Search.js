import { useState } from "react"

const Search = (props) => {

  const [text, setText] = useState('')

  const onChange = (event) => {
    setText(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.searchUser(text);
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange}/>
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
    </div>
  );
}

export default Search