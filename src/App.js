import React from 'react';
import AuthIframe from './components/AuthIframe';
import './App.css';

const glassStyle = {
  minHeight: '100vh', // Full viewport height
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 128, 128, 0.4)', // Dark aquamarine with semi-transparency
  backdropFilter: 'blur(10px)', // Blur effect for the glass look
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow
  border: '1px solid rgba(0, 128, 128, 0.5)', // Border with a lighter shade
  padding: '20px',
  borderRadius: '10px', // Rounded corners
};

function App() {
  return (
      <div className="App" style={glassStyle}>
        <AuthIframe />
      </div>
  );
}

export default App;
