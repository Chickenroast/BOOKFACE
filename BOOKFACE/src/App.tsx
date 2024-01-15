import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Sign from './Pages/Sign';
import Message from './Pages/Message';
import Profil from './Pages/Profil';
import Error404 from './Pages/Error404';
import Conversation from './Pages/Conversation';
import MessageDashboard from './Pages/Message';
import Presenation from './Pages/Presentation/Presenation';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/p" element={<Presenation />} />
        <Route path="/message" element={<MessageDashboard />} />
        <Route path="/conversation/:conversationId" element={<Conversation />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profil" element={<Profil />} />

        {/* 404 - Page Not Found */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
