import React from 'react'
import { useParams } from 'react-router-dom'

function RepoDetalis() {
    const param = useParams()
    console.log(param.reponame)
    fetch(`https://api.github.com/users/elzerowebschool/repos${param.reponame}`)
    .then(data => data.json())
    .then(res => console.log(res))
  return (
    <div>
      
    </div>
  )
}

export default RepoDetalis
