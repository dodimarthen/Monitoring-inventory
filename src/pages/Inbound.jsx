export default function Inbound() {
  return (
      <div className="ml-20">
          <h1 className="text-2xl font-bold mb-4">Inbound Inventory</h1>
          
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
                          { product: "Nanometrics", type: "Titan-100", serial: "2245", penyedia: "Nanometrics", dateIn: "2024-02-01", dateOut: "2025-02-01", keterangan: "Kantor Pusat BMKG" },
                          { product: "Microsoft Surface Pro", type: "Laptop PC", serial: "MSP-2023-015", penyedia: "Microsoft", dateIn: "2024-02-02", dateOut: "2025-01-01", keterangan: "Kantor Pusat BMKG" },
                          { product: "Magic Mouse 2", type: "Accessories", serial: "MM2-2023-072", penyedia: "Apple Inc.", dateIn: "2024-02-03", dateOut: "2024-12-03", keterangan: "Balai III Medan" },
                          { product: "Google Pixel Phone", type: "Phone", serial: "GP-2023-045", penyedia: "Google", dateIn: "2024-02-04", dateOut: "2024-02-10", keterangan: "Balai V Jayapura" },
                          { product: "Apple Watch 5", type: "Wearables", serial: "AW5-2023-034", penyedia: "Apple Inc.", dateIn: "2024-02-05", dateOut: "2024-08-23", keterangan: "Balai II Ciputat" }
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
