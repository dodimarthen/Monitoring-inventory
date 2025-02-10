import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-80">
      <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search Products"
        className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}
