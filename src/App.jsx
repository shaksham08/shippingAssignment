import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import AddData from "./pages/AddData/AddData";
import NavBar from "./components/NavBar/NavBar";
import TableList from "./pages/TableList/TableList";
import { ShippingProvider } from "./context/ShippingContext";

function App() {
  return (
    <div>
      <NavBar />
      <ShippingProvider>
        <Routes>
          <Route path="/add" element={<AddData />} />
          <Route path="/table-list" element={<TableList />} />
          <Route path="*" element={<Navigate to="/add" replace />} />
        </Routes>
      </ShippingProvider>
    </div>
  );
}

export default App;
