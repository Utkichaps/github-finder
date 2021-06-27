import { useEffect } from "react";

const User = (props) => {

    useEffect(() => {
        props.getUser(props.match.params.login)
    },[])

    const {name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = props.user
    const {loading} = props

    return <div>
        <h1>{name}</h1>
    </div>
}

export default User;