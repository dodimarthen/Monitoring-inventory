import { useState } from "react";

export default function Outbound() {
  const [searchQuery, setSearchQuery] = useState("");

  const outboundData = [
    { product: "Dell XPS 13", type: "Laptop", serial: "DXPS-2023-021", penyedia: "Dell", dateIn: "2024-01-15", dateOut: "2024-02-05", keterangan: "Shipped" },
    { product: "Samsung Galaxy S21", type: "Phone", serial: "SGS21-2023-032", penyedia: "Samsung", dateIn: "2024-01-18", dateOut: "2024-02-07", keterangan: "Delivered" },
    { product: "Sony WH-1000XM4", type: "Headphones", serial: "SWH4-2023-045", penyedia: "Sony", dateIn: "2024-01-20", dateOut: "-", keterangan: "Pending shipment" },
    { product: "iPad Pro 12.9", type: "Tablet", serial: "IPD12-2023-067", penyedia: "Apple Inc.", dateIn: "2024-01-22", dateOut: "2024-02-09", keterangan: "On the way" },
    { product: "Logitech MX Master 3", type: "Accessories", serial: "LMM3-2023-078", penyedia: "Logitech", dateIn: "2024-01-25", dateOut: "-", keterangan: "Processing" }
  ];

  const filteredData = outboundData.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="ml-20">
      <h1 className="text-2xl font-bold mb-4">Outbound Inventory</h1>

      {/* Search Bar */}
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
