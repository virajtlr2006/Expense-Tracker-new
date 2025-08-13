import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const SignIn = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const OnSubmit = async () => {
        const SignInAPI = await axios.post("http://localhost:8080/auth/signin", {
            "email": email,
            "password": password
        })
            console.log(SignInAPI.data)
    if (SignInAPI.data.message == "Signedin") {
        localStorage.setItem("email", email)
        navigate("/", {
            replace: true
        })

    } else {
        alert("Invalid password")
    }
    }
    return (
        <div>
            <input type="text" placeholder='Email' onChange={(e) => setemail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e) => setpassword(e.target.value)} />
            <button onClick={OnSubmit}>Log In</button>
        </div>
    )
}

export default SignIn
