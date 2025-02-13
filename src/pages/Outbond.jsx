export default function Outbound() {
  return (
      <div className="ml-20">
          <h1 className="text-2xl font-bold mb-4">Outbound Inventory</h1>
          
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
                      {[
                          { product: "Dell XPS 13", type: "Laptop", serial: "DXPS-2023-021", penyedia: "Dell", dateIn: "2024-01-15", dateOut: "2024-02-05", keterangan: "Shipped" },
                          { product: "Samsung Galaxy S21", type: "Phone", serial: "SGS21-2023-032", penyedia: "Samsung", dateIn: "2024-01-18", dateOut: "2024-02-07", keterangan: "Delivered" },
                          { product: "Sony WH-1000XM4", type: "Headphones", serial: "SWH4-2023-045", penyedia: "Sony", dateIn: "2024-01-20", dateOut: "-", keterangan: "Pending shipment" },
                          { product: "iPad Pro 12.9", type: "Tablet", serial: "IPD12-2023-067", penyedia: "Apple Inc.", dateIn: "2024-01-22", dateOut: "2024-02-09", keterangan: "On the way" },
                          { product: "Logitech MX Master 3", type: "Accessories", serial: "LMM3-2023-078", penyedia: "Logitech", dateIn: "2024-01-25", dateOut: "-", keterangan: "Processing" }
                      ].map((item, index) => (
                          <tr 
                              key={index} 
                              className="odd:bg-white hover:bg-gray-200 transition">
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
