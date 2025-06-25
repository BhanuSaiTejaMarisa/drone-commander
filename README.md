# 🛰️ Drone Commander

Drone Commander is a full-stack (WIP) application designed to manage and simulate drone movements across mapped areas. It builds upon an earlier project, **Drone Path Simulator**, which focuses on frontend-only drone path visualization.

---

## 🚀 Features

### ✅ Drone Path Simulator (Frontend)
- Draws a polyline path using **React Leaflet**
- Animates drone movement along the path
- Handles invalid inputs or missing location data
- Built using:
  - React
  - React-Leaflet
  - CSS animations

🔗 **Live Preview**:  
[Drone Path Simulator on CodeSandbox](https://codesandbox.io/p/sandbox/drone-path-simulator-5xtit1)

---

### 🧩 Drone Commander (Full-Stack – In Progress)
- Models & relationships:
  - `User ↔ Site ↔ Drone`
- Example use case:
  - A user can manage multiple sites
  - Each site can have one or more drones assigned
- Uses **MongoDB transactions** to:
  - Ensure consistency when assigning drones to sites
  - Roll back if part of the operation fails

🛠️ Built with:
- Node.js + Express
- MongoDB + Mongoose
- JWT for auth 
- Modular controller/services setup

---

## 📁 Structure

- client => (to be added)
  - React frontend (in progress)

- server
  - models/
  - routes/
  - controllers/
  - db connection

---

## 📝 Future Improvements
- Add frontend UI for drone assignment and monitoring
- Real-time updates using WebSockets
- Refine simulation speed and controls

---
