import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Home, Box, Truck, LogOut } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    navigate("/");
    setLoading(false);
  };

  return (
    <aside className="group w-18 hover:w-64 transition-all duration-300 bg-orange-400 bg-opacity-200 backdrop-blur-md shadow-lg p-4 flex flex-col h-screen">
      {/* Sidebar Header */}
      <h1 className="text-2xl font-bold text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        WMS
      </h1>

      {/* Navigation Links */}
      <nav className="space-y-4 flex flex-col mt-6">
        <NavLink 
          to="/dashboard"
          className={({ isActive }) => `flex items-center p-2 rounded-lg text-white hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`}
        >
          <Home className="w-6 h-6 min-w-[24px]" />
          <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </NavLink>

        <NavLink 
          to="/dashboard/inbound"
          className={({ isActive }) => `flex items-center p-2 rounded-lg text-white hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`}
        >
          <Box className="w-6 h-6 min-w-[24px]" />
          <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Inbound
          </span>
        </NavLink>

        <NavLink 
          to="/dashboard/outbound"
          className={({ isActive }) => `flex items-center p-2 rounded-lg text-white hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`}
        >
          <Truck className="w-6 h-6 min-w-[24px]" />
          <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Outbound
          </span>
        </NavLink>
      </nav>

      {/* Logout Button */}
      <button 
  onClick={handleLogout} 
  className="mt-auto flex items-center justify-start w-full p-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
  disabled={loading}
>
  {loading ? (
    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  ) : (
    <LogOut className="w-6 h-6 min-w-[24px] text-white" />
  )}
  <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Logout
  </span>
</button>


    </aside>
  );
}
