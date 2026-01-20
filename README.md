# 🗳️ Voting Platform

A secure, real-time web application designed for Whitematrix Internship Machine Test (December 2025). This platform ensures a fair and transparent voting process by leveraging Google Authentication to verify voters and preventing duplicate entries through database logic.

## 🚀 Live Demo
**[Link](https://voting-platform-one.vercel.app)**

## ✨ Key Features
- **Secure Authentication:** Users sign in via Google OAuth to verify their identity.
- **Single-Vote Logic:** The system checks the user's unique ID against the database to prevent multiple votes.
- **Real-time Database:** Vote counts and user statuses are updated instantly using Firebase Firestore.
- **LinkedIn Integration**: Dynamic profile links for both candidates and voters to ensure professional transparency.
- **Responsive Design:** A clean, mobile-friendly interface built for all devices.

## 🛠️ Tech Stack
- **Language:** JavaScript (ES6+) and HTML5 
- **Frontend Library:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide-React
- **Backend & Database:** Google Firebase   (Firestore & Authentication)
- Deployment : Vercel 
- Editor: VS Code

<pre>
📁 Project Structure
root/
├── public/          # Static assets (images, icons)
├── src/
│   ├── components/  # Reusable UI elements (Navbar, Buttons)
│   ├── firebase.js  # Firebase Initialization & Security Config
│   ├── Vote.jsx     # CORE LOGIC: Single-vote validation & Firestore updates
│   ├── App.jsx      # Main routing & User Authentication state
│   └── main.jsx     # Application entry point
├── index.html       # Root HTML template
└── vite.config.js   # Vite build configuration
</pre>

⚙️ Setup & Installation
- Clone or Download the repository.
- Run npm install to install the necessary dependencies.
- Configure your Firebase credentials in src/firebase.js.
- Run npm run dev to launch the project locally.
# voting-platform
A secure student voting system built with React and Firebase, featuring Google Authentication and real-time vote tracking.

🛡️ Syllabus Alignment
- ​This project implements the core principles from the WhiteMatrix study materials (Next.js & AWS Lambda) through a real-time serverless stack:
- ​Architecture: Serverless (Following the event-driven logic of AWS Lambda).
- ​Frontend: React.js (Following the component-based UI patterns of Next.js).
- ​Backend/DB: Google Firebase (Chosen for instant Real-time Sync required for live voting).
- ​Security: Google OAuth 2.0 + Database unique-entry validation.

  📜 License
This project was created exclusively for the White Matrix Internship Machine Test (December 2025).

## 👥 Project Team

* **G Varun** – Lead Full-Stack Developer 
  *(Technical Architecture, Firebase Integration, & React Development)*

* **Selin Rose Shaju** – Project Support Lead 
  *(Quality Assurance and Research Support)*




