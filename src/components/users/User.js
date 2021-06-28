import { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import {Link} from 'react-router-dom'
import Repos from "../repos/Repos";
import githubContext from "../../context/github/githubContext";

const User = ({ match }) => {

    const ctx = useContext(githubContext)

    useEffect(() => {
        ctx.getUser(match.params.login)
        ctx.getUserRepos(match.params.login)
    },[])

    const {name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = ctx.user
    const {loading} = ctx
    const {repos} = ctx

    if (loading) {
        return <Fragment>
            <Spinner />
        </Fragment>
    } else {
    return <Fragment>        
        <Link to='/' className='btn btn-light'>Back to search</Link><br />      
        {hireable ? <p>Hireable</p>: <p>Not hireable</p>}
        <div className="card grid-2">
            <div className="all-center">
                <img src={avatar_url} className="round-img" style={{width: '150px'}} alt="" />
                <h1>{name}</h1>
                <p>{location}</p>
            </div>        
            <div>
                {bio && <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                    
                    </Fragment>}
                <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
                <ul>
                    <li>
                        {login && <Fragment>
                            <strong>Username: </strong> {login}
                            
                            </Fragment>}
                    </li>
                    <li>
                        {company && <Fragment>
                            <strong>Company: </strong> {company}
                            
                            </Fragment>}
                    </li>
                    <li>
                        {blog && <Fragment>
                            <strong>Blog: </strong> {blog}
                            
                            </Fragment>}
                    </li>                
                </ul>
            </div>
        </div>
        <div className="card text-center">
            <div className="badge badge-primary">
                Followers: {followers}
            </div>
            <div className="badge badge-success">
                Following: {following}
            </div>
            <div className="badge badge-light">
                Public repos: {public_repos}
            </div>
            <div className="badge badge-dark">
                Public gists: {public_gists}
            </div>

        </div>
        <Repos repos={repos} />
    </Fragment>
    }
}

export default User;