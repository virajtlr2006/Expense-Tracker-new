import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Profile from './pages/Profile.jsx';
import EditProfile from './pages/EditProfile.jsx';
import Entry from './pages/Entry.jsx';
import History from './pages/History.jsx'
import UpdateHistory from './pages/UpdateHistory.jsx';
import Delete from './pages/Delete.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/entry/new" element={<Entry />} />
        <Route path="/list" element={<History />} />
        <Route path="/update/:id" element={<UpdateHistory />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
