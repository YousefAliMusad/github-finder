import { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import user from "../images/avatar.png"
import { Link } from "react-router-dom";

function Home() {
    const api = "https://api.github.com/users/"
    const [userData, SetuserData] = useState([])
    const [Repos, SetRepos] = useState([])
    const [dateTimeString , setdateTimeString] = useState()
    const [input , setinput] = useState("")

const FetchMainInfo = ()=>{
        fetch(api+input)
            .then(data =>  data.json() )
            .then(res => {
                SetuserData(res);
                setdateTimeString(res.created_at);
                const datePattern = /^(\d{4}-\d{2}-\d{2}).*/;
                const match = res.created_at.match(datePattern);
                if (match) {
                    sethelp(match[1]);
                } else {
                    sethelp("Date not found in the string.");
                }
            })
            .catch(error => console.log(error))

}

const FetchRepos = ()=>{
    fetch(`${api+input}/repos`)
    .then(data => data.json())
    .then(res => {
        SetRepos(res)
    })
}
    
    const [help , sethelp] = useState()
    const CheckUser = () => {
        if(input !== "" ) {
            FetchMainInfo()
            FetchRepos()
            console.log(Repos)
        }
        else {
            return null
        }

    }

    return(
        <>
        <div className="home-section ps-4 pe-4 " style={{margin:"0 auto"}}>
            <div className="search-bar d-flex" style={{justifyContent:"center", alignItems:"center"}}>
                <input type="text" onChange={(e)=> setinput(e.target.value)} placeholder="Enter User Name" style={{width:"calc(100% - 120px)", height:"50px", border:"1px solid black", outline:"none", padding:"10px"}}/>
                <button onClick={()=> CheckUser()} style={{width:"120px", height:"50px", background:"rgb(32,32,32)", color:"white" , border:"1px solid black", borderRadius:"0"}}>Search</button>
            </div>

            <div className="extracted-data mt-5">
                <div className="extracted-data-section extracted-data-info">

                    <div className="avater-img">
                        <img src={userData && userData.avatar_url ? userData.avatar_url : user} alt="" />
                    </div>
                        <div className="datalis-section">
                            <div>Profile Name : <span>{userData.login ? userData.login : "No Data" }</span></div>
                            <div>Public Repos : <span>{userData.public_repos ? userData.public_repos : "No Data" }</span></div>
                            <div>Joind on : <span>{help ? help : "No Data" }</span></div>
                            <div>Followers : <span>{userData.followers ? userData.followers : "0" }</span></div>
                            <div>Following : <span>{userData.following ? userDanta.following : "0" }</span></div>
                        </div>
                </div>

                <div className="extracted-data-section extracted-data-repos">
            {userData.login ? (

                    Repos.length === 0 ? null : (Repos.map((repo) => {
                        return (
                        <div title={repo.name} className="repo" key={repo.id}>
                            <div className="data_repo">
                                <a href={repo.html_url} className="repo-name">{repo.name.length > 35 ? `${repo.name.slice(0 , 35)}...` : `${repo.name.slice(0 , 30)}`}</a>
                                <span className="repo-vispil repo-vispil-1">{repo.private ? "Private" : "Public" }</span>
                            </div>
                            <div className="d-flex mt-3" style={{alignItems:"center", justifyContent:"space-between"}}>
                                <div className="data_repo_more">
                                    <span className="repo-lang">{repo.language}</span>
                                    <span className="repo-stars"><BiStar/> <span className="ms-1">{repo.stargazers_count}</span></span>
                                </div>
                                
                                <span className="repo-vispil repo-vispil-2">{repo.private ? "Private" : "Public" }</span>
                            </div>
                        </div>
                        
                        )}))

                        ) : <h4 className="text-center text-capitalize m-0">no data entered</h4> }
                </div>
            </div>

        </div>



        </>
    )
}

export default Home