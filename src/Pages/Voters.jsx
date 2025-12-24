import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Voters() {
  const [votes, setVotes] = useState([]);
  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "votes"), (snapshot) => {
      const votesData = snapshot.docs.map(doc => doc.data());
      setVotes(votesData);
    });
    return () => unsubscribe();
  }, []);

  // Vote Counting Logic
  const varunVotes = votes.filter(v => v.votedFor === "G VARUN").length;
  const selinVotes = votes.filter(v => v.votedFor === "SELIN ROSE SHAJU").length;

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Live Election Results</h1>

      {/* Summary Score Cards */}
      <div style={summaryContainer}>
        <div style={scoreCard}>
          <h3 style={cardTitle}>G VARUN</h3>
          <p style={scoreNum}>{varunVotes}</p>
        </div>
        <div style={scoreCard}>
          <h3 style={cardTitle}>SELIN ROSE SHAJU</h3>
          <p style={scoreNum}>{selinVotes}</p>
        </div>
      </div>

      {/* Results Table */}
      <div style={tableWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "white" }}>
              <th style={thStyle}>Voter</th>
              <th style={thStyle}>Name (LinkedIn)</th>
              <th style={thStyle}>Voted For</th>
            </tr>
          </thead>
          <tbody>
            {votes.map((v, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                <td style={tdStyle}>
                  <img 
                    src={v.voterPhoto || `https://ui-avatars.com/api/?name=${v.voterName.split(' ').reverse().join(' ')}&background=0D8ABC&color=fff&bold=true`} 
                    alt="pfp" 
                    style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #007bff' }} 
                  />
                </td>
                <td style={tdStyle}>
                  <a href={v.voterLinkedin} target="_blank" rel="noreferrer" style={voterLink}>
                    {v.voterName} 
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="ln" style={{width:'15px', marginLeft:'8px'}}/>
                  </a>
                </td>
                <td style={tdStyle}><span style={badgeStyle}>{v.votedFor}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button onClick={() => window.location.href='/'} style={logoutBtn}>Logout</button>
    </div>
  );
}

// --- UPDATED STYLES WITH BACKGROUND ---
const containerStyle = { 
  padding: "60px 20px", 
  textAlign: "center", 
  backgroundImage: `linear-gradient(rgba(240, 244, 248, 0.9), rgba(240, 244, 248, 0.9)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070')`,
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: "100vh", 
  fontFamily: "'Inter', 'Segoe UI', sans-serif" 
};

const headerStyle = { color: "#1a202c", fontSize: "2.5rem", marginBottom: "40px", fontWeight: "800", letterSpacing: "-1px" };
const summaryContainer = { display: "flex", justifyContent: "center", gap: "25px", marginBottom: "40px" };
const scoreCard = { backgroundColor: "#ffffff", padding: "25px", borderRadius: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", width: "220px", borderTop: "5px solid #007bff" };
const cardTitle = { fontSize: "12px", color: "#718096", textTransform: "uppercase", letterSpacing: "1px", margin: "0" };
const scoreNum = { fontSize: "2.8rem", fontWeight: "bold", color: "#2d3748", margin: "10px 0 0 0" };
const tableWrapper = { maxWidth: "850px", margin: "auto", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", backgroundColor: "#ffffff" };
const tableStyle = { width: "100%", borderCollapse: "collapse" };
const thStyle = { padding: "22px", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", color: "#fff" };
const tdStyle = { padding: "18px", color: "#4a5568", verticalAlign: "middle" };
const voterLink = { color: "#0077b5", textDecoration: "none", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" };
const badgeStyle = { backgroundColor: "#ebf8ff", color: "#3182ce", padding: "6px 16px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase" };
const logoutBtn = { marginTop: "40px", padding: "14px 45px", cursor: "pointer", backgroundColor: "#1a202c", color: "white", border: "none", borderRadius: "12px", fontWeight: "bold", transition: "0.3s" };

export default Voters;