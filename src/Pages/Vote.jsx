import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import varunImg from "../assets/varun.jpeg";
import selinImg from "../assets/selin.png";

function Vote() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const VARUN_LINKEDIN = "https://www.linkedin.com/in/g-varun-182951388/";
  const SELIN_LINKEDIN = "https://www.linkedin.com/in/selin-rose-shaju-26678b398/";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
      else navigate("/");
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleVote = async (candidateName) => {
    if (!currentUser) return;
    try {
      const voteRef = doc(db, "votes", currentUser.uid);
      const voteSnap = await getDoc(voteRef);

      if (voteSnap.exists()) {
        alert("You have already cast your vote!");
        navigate("/voters");
      } else {
        await setDoc(voteRef, {
          voterName: currentUser.displayName,
          voterPhoto: currentUser.photoURL,
          votedFor: candidateName,
          voterLinkedin: `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(currentUser.displayName)}`,
          timestamp: new Date(),
        });
        alert(`Successfully voted for ${candidateName}!`);
        navigate("/voters");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div style={{textAlign: 'center', marginTop: '100px', color: 'white'}}><h2>Loading Ballot...</h2></div>;

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 style={headerStyle}>Election 2025</h1>
        <p style={subHeaderStyle}>Authenticated: <strong>{currentUser?.displayName}</strong></p>

        <div style={cardContainer}>
          {/* Candidate 01: G VARUN */}
          <div style={cardStyle}>
            <div style={idBadge}>ID: 01</div>
            <img src={varunImg} alt="G VARUN" style={imgStyle} />
            <h2 style={nameStyle}>G VARUN</h2>
            <a href={VARUN_LINKEDIN} target="_blank" rel="noreferrer" style={lnBtn}>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LN" style={{width:'16px', marginRight:'5px'}}/>
              View LinkedIn
            </a>
            <button onClick={() => handleVote("G VARUN")} style={voteBtnStyle}>Vote</button>
          </div>

          {/* Candidate 02: SELIN ROSE SHAJU */}
          <div style={cardStyle}>
            <div style={idBadge}>ID: 02</div>
            <img src={selinImg} alt="SELIN" style={imgStyle} />
            <h2 style={nameStyle}>SELIN ROSE SHAJU</h2>
            <a href={SELIN_LINKEDIN} target="_blank" rel="noreferrer" style={lnBtn}>
               <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LN" style={{width:'16px', marginRight:'5px'}}/>
               View LinkedIn
            </a>
            <button onClick={() => handleVote("SELIN ROSE SHAJU")} style={voteBtnStyle}>Vote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- UPDATED STYLES ---
const containerStyle = { 
  minHeight: "100vh", 
  width: "100%", 
  backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070')`, 
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  backgroundAttachment: 'fixed' 
};

const overlayStyle = { 
  minHeight: "100vh", 
  width: "100%", 
  backgroundColor: "rgba(0, 0, 0, 0.5)", 
  padding: "60px 20px",
  boxSizing: "border-box"
};

const headerStyle = { fontSize: "3rem", color: "#ffffff", marginBottom: "5px", fontWeight: "800", textAlign: "center" };
const subHeaderStyle = { color: "#e2e8f0", marginBottom: "40px", textAlign: "center" };
const cardContainer = { display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" };
const idBadge = { backgroundColor: "#007bff", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold", marginBottom: "10px", display: "inline-block" };
const cardStyle = { backgroundColor: "rgba(255, 255, 255, 0.95)", padding: "30px", borderRadius: "25px", boxShadow: "0 15px 35px rgba(0,0,0,0.4)", width: "280px", textAlign: "center", backdropFilter: "blur(10px)" };
const imgStyle = { width: "180px", height: "180px", borderRadius: "50%", objectFit: "cover", border: "6px solid #007bff", marginBottom: "15px" };
const nameStyle = { fontSize: "1.2rem", fontWeight: "bold", color: "#222", marginBottom: "10px" };
const lnBtn = { display: "flex", alignItems: "center", justifyContent: "center", color: "#0077b5", textDecoration: "none", fontWeight: "bold", marginBottom: "20px", fontSize: "0.9rem" };
const voteBtnStyle = { backgroundColor: "#28a745", color: "white", border: "none", padding: "14px 0", width: "100%", borderRadius: "30px", cursor: "pointer", fontWeight: "bold", fontSize: "1rem" };

export default Vote;