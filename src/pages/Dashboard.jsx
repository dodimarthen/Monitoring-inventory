import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/Searchbar";  
import Home from "./Home";
import Inbound from "./Inbound";
import Outbound from "./Outbond";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="ml-auto">
            <SearchBar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="inbound" element={<Inbound />} />
          <Route path="outbound" element={<Outbound />} />
        </Routes>
      </div>
    </div>
  );
}
