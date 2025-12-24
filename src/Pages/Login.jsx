import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Logic for Google Sign-In
      await signInWithPopup(auth, provider);
      navigate("/vote");
    } catch (err) {
      console.error("Login Error:", err);
      alert("Sign-in failed. Please check your internet or try again.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <div style={glassCardStyle}>
          <h1 style={titleStyle}>Welcome to Voting Platform</h1>
          <p style={subtitleStyle}>Official Student Election Portal</p>
          
          {/* Main Login Button */}
          <button onClick={handleLogin} style={loginBtnStyle}>
            <img 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="Google" 
              style={{ width: '20px', marginRight: '12px' }} 
            />
            Login with Google
          </button>

          {/* Mandatory Feature: Forgot Password Help */}
          <div style={forgotPasswordSection}>
            <p style={helpText}>Having trouble accessing your account?</p>
            <a 
              href="https://accounts.google.com/signin/recovery" 
              target="_blank" 
              rel="noreferrer" 
              style={forgotLinkStyle}
            >
              Forgot Google Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- CSS STYLES ---
const containerStyle = {
  height: "100vh",
  width: "100%",
  // Modern University Hallway Background
  backgroundImage: `url('https://images.unsplash.com/photo-1523050853064-dbad3536993a?q=80&w=2070')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
};

const overlayStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay to make white text readable
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const glassCardStyle = {
  padding: "60px 40px",
  backgroundColor: "rgba(255, 255, 255, 0.12)", // Translucent "Glass" effect
  backdropFilter: "blur(15px)", 
  borderRadius: "32px",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
  textAlign: "center",
  maxWidth: "420px",
  width: "90%",
};

const titleStyle = { 
  color: "#ffffff", 
  fontSize: "2.2rem", 
  fontWeight: "900", 
  marginBottom: "10px",
  letterSpacing: "-1px"
};

const subtitleStyle = { 
  color: "#cbd5e0", 
  fontSize: "1rem", 
  marginBottom: "40px" 
};

const loginBtnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "16px",
  borderRadius: "15px",
  border: "none",
  backgroundColor: "#ffffff",
  color: "#1a202c",
  fontSize: "17px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s ease",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
};

const forgotPasswordSection = {
  marginTop: "30px",
  borderTop: "1px solid rgba(255, 255, 255, 0.15)",
  paddingTop: "20px"
};

const helpText = { color: "#a0aec0", fontSize: "0.85rem", marginBottom: "8px" };

const forgotLinkStyle = {
  color: "#63b3ed",
  fontSize: "0.9rem",
  textDecoration: "none",
  fontWeight: "700"
};

export default Login;