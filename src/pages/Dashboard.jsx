import { useState } from "react";
import { Search, Warehouse } from "lucide-react";
import { useNavigate } from "react-router-dom";

const inventoryData = [
  { id: 1, name: "Nike Primary", category: "T-Shirt", price: "$500", stock: "100", variants: 1 },
  { id: 2, name: "Nocta", category: "Hoodie", price: "$500", stock: "80", variants: 3 },
  { id: 3, name: "Jordan Flight Essentials", category: "T-Shirt", price: "$232", stock: "32", variants: 2 },
  { id: 4, name: "Nike Victory", category: "T-Shirt", price: "$340", stock: "44", variants: 1 },
  { id: 5, name: "Jordan Dri-FIT Sport", category: "Hoodie", price: "$112", stock: "82", variants: 4 },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirect to login page
  };

  const filteredInventory = inventoryData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h1 className="text-xl font-bold mb-6">EcomDash</h1>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 font-semibold">Home</a>
          <a href="#" className="block text-gray-700 font-semibold">Catalog</a>
          <a href="#" className="block text-blue-600 font-semibold">Inventory</a>
          <a href="#" className="block text-gray-700 font-semibold">Orders</a>
          <a href="#" className="block text-gray-700 font-semibold">Customers</a>
        </nav>
        <button onClick={handleLogout} className="mt-6 bg-red-500 text-white py-2 rounded-lg">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Inventory</h2>
          <div className="relative w-80">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Products"
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center space-x-4 border-b pb-3 mb-3">
            <Warehouse size={20} className="text-gray-600" />
            <span className="font-semibold text-gray-700">Main Warehouse</span>
            <span className="text-sm text-blue-500 cursor-pointer">Recently Updated</span>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-3">Product</th>
                <th className="py-2 px-3">Price</th>
                <th className="py-2 px-3">Inventory</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-3 px-3 flex items-center space-x-2">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-600">{item.category}</span>
                  </td>
                  <td className="py-3 px-3">{item.price}</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold">{item.stock}</span> Stock / {item.variants} Variants
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
