import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const EditProfile = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [profilepic, setProfilepic] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        const email = localStorage.getItem("email")
        const profile = await axios.post("http://localhost:8080/auth/profile", {
            "email": email
        })
console.log(profile);

        setUsername(profile.data.profile.username)
        setProfilepic(profile.data.profile.profilepic)
        setPassword(profile.data.profile.password)
    }

    const UpdateAProfile = async () => {
        const email = localStorage.getItem("email")
        const newProfile = await axios.post("http://localhost:8080/auth/profile/edit", {
            "email":email,
            "username": username,
            "profilepic": profilepic,
            "password": password
        })
        if (newProfile.data.message == "Profile Updated Successfully"){
            navigate("/profile")
        }
        else{
            alert("Unable to Update")
        }
        console.log(newProfile.data.message)
    }
    
    return (
        <div>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder='profile picture' value={profilepic} onChange={(e) => setProfilepic(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={UpdateAProfile}>Update</button>
        </div>
    )
}

export default EditProfile
