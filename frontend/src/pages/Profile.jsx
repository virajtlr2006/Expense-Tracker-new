import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'


const Profile = () => {
  const navigate = useNavigate()
  const [profile, setprofile] = useState("")
  useEffect(() => {
    GetProfile()
  }, [])
   
  const GetProfile = async () => {
    const Email = localStorage.getItem("email")
    if(!Email){
      navigate("/signin")
    }
    const UserProfile = await axios.post("http://localhost:8080/auth/profile",{
      "email":Email
    })
    console.log(UserProfile)
     setprofile(UserProfile.data.profile);

  } 

  const EditProfile = async () => {
    const Email = localStorage.getItem("email")
    navigate("/profile/edit")
  }

    const LogOut =  async () => {
    const Email = localStorage.removeItem("email")
    navigate("/signin")
  }
  return (
    <div>
      <p>{profile.username}</p>
      <p>{profile.email}</p>
      <img src={profile.profilepic} alt="profile pic" />
      <button onClick={EditProfile}>Edit Profile</button>
      <button onClick={LogOut}>Log Out</button>
    </div>
  )
}
export default Profile
