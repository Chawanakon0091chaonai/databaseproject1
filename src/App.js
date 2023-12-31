import React from 'react';
import './Styles/index.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import './Styles/App.css';
// Below This add is import page.
import Login from "./Pages/Login_page.js";
import Main from "./Pages/Main_page.js";
import Signup from "./Pages/Signup_page.js";
import Editshop from "./Pages/Editshop_page.js";
import Profile from "./Pages/Profile_page.js";
import Editprofile from "./Pages/Editprofile_page.js";
import Manageshop from "./Pages/Manageshop_page.js";
import Addproduct from "./Pages/Addproduct_page.js";
import Editproduct from "./Pages/Editproduct_page.js";
import Notfound from "./Pages/Notfound_page.js";




function App() {
  return (
    
    <div className="App">
      <Routes>
      {/* Start page when open. */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Added pages and set path. */}
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/editshop" element={<Editshop/>}/>
      <Route path="/editprofile" element={<Editprofile/>}/>
      <Route path="/manageshop" element={<Manageshop/>}/>
      <Route path="/addproducts" element={<Addproduct/>}/>
      <Route path="/editproduct" element={<Editproduct/>}/>
      

      
      {/* Redirect page to 404 when url out of our url lists */}
      <Route path="/NotFoundPage" element={<Notfound/>}/>
      <Route path="/404" element={<Navigate to="/NotFoundPage" />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
