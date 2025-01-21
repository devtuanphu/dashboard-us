import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
      </Routes>
    </>
  );
}

export default App;
