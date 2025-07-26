import { useState } from 'react'
import './App.css'
import axios from'axios';
function App() {
  const [username,setusername] = useState(null);
  const [userinfo,setuserinfo]=useState(null);
 const handleFormSubmit=async(e)=>{
  e.preventDefault();
  
  const response=await axios.get('https://api.github.com/users/'+username);
  console.log(response);
  setuserinfo(response.data)
  console.log(userinfo);
 }
  return (
    <div className="maincontainer">
      <div className="container">
        <h1>Github wrapper</h1>
        <form className="formCard" onSubmit={handleFormSubmit}>
          <input type="text" onChange={(e)=>setusername(e.target.value)}/>
          <button>search</button>
        </form>
        {userinfo && (<div className="userDetailCard">
          <div className="userDetailBody">
            <p className="name">{userinfo.name}</p>
           <em className='username'>{userinfo.login}</em>
            <div className="follow">
              <p>Followers: {userinfo.followers}</p>
              <p>following: {userinfo.following}</p>
            </div>
            <div className='prof'>
              <p>🏢{userinfo.company}</p>
          <p>✍️{userinfo.bio} </p>
          </div>
          </div>
          <div className="userImage">
          <img src={userinfo.avatar_url} alt="" />
        </div>
        </div>)}
      </div>
    </div>
  )
}

export default App
