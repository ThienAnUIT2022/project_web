import React from 'react';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Quicktips from './pages/Quicktips';
import Destination from './pages/Destination';
import FAQs from './pages/FAQs';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx'
import Profile from './pages/Profile/Profile.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import useFetch from './hooks/useFetch.js';
import BlogContent from './pages/BlogContent.jsx';

function App(props) {

  let {loading, error, data} = useFetch('https://graceful-authority-3dcf287362.strapiapp.com/api/blogs?populate=*');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>
  console.log(data);
  return (
    <div>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home blogs={data?data:""} />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/quicktips" element={<Quicktips />} />
                <Route path="/quicktips" element={<Quicktips />} />
                <Route path="/destination" element={<Destination blogs={data?data:""} />} />
                <Route path="/destination/:id" element={<BlogContent blogs={data?data:""} />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;