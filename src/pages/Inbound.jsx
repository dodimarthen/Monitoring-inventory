import { useState } from "react";

export default function Inbound() {
  const [searchQuery, setSearchQuery] = useState("");
  const inventoryData = [
    { product: "Nanometrics", type: "Titan-100", serial: "2245", penyedia: "Nanometrics", dateIn: "2024-02-01", dateOut: "2025-02-01", keterangan: "Kantor Pusat BMKG" },
    { product: "Microsoft Surface Pro", type: "Laptop PC", serial: "MSP-2023-015", penyedia: "Microsoft", dateIn: "2024-02-02", dateOut: "2025-01-01", keterangan: "Kantor Pusat BMKG" },
    { product: "Magic Mouse 2", type: "Accessories", serial: "MM2-2023-072", penyedia: "Apple Inc.", dateIn: "2024-02-03", dateOut: "2024-12-03", keterangan: "Balai III Medan" },
    { product: "Google Pixel Phone", type: "Phone", serial: "GP-2023-045", penyedia: "Google", dateIn: "2024-02-04", dateOut: "2024-02-10", keterangan: "Balai V Jayapura" },
    { product: "Apple Watch 5", type: "Wearables", serial: "AW5-2023-034", penyedia: "Apple Inc.", dateIn: "2024-02-05", dateOut: "2024-08-23", keterangan: "Balai II Ciputat" }
  ];

  const filteredData = inventoryData.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="ml-20">
      <h1 className="text-2xl font-bold mb-4">Inbound Inventory</h1>
      
      <div className="relative mt-1 mb-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-3 h-3 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          className="block pt-0 ps-8 text-sm text-gray-900 font-bold border border-gray-300 rounded-md w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for items"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-black uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">Product</th>
              <th scope="col" className="px-6 py-3">Type</th>
              <th scope="col" className="px-6 py-3">Serial Number</th>
              <th scope="col" className="px-6 py-3">Penyedia</th>
              <th scope="col" className="px-6 py-3">Date In</th>
              <th scope="col" className="px-6 py-3">Date Out</th>
              <th scope="col" className="px-6 py-3">Keterangan</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredData.map((item, index) => (
              <tr key={index} className="odd:bg-white hover:bg-gray-200 transition">
                <th scope="row" className="px-6 py-4 font-medium text-black">{item.product}</th>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4">{item.serial}</td>
                <td className="px-6 py-4">{item.penyedia}</td>
                <td className="px-6 py-4">{item.dateIn}</td>
                <td className="px-6 py-4">{item.dateOut}</td>
                <td className="px-6 py-4">{item.keterangan}</td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-700 hover:underline">Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
