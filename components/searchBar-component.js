"use client";

import { Input, Button } from "@heroui/react";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation"; // Use this for path and query params

export default function SearchBarComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname(); // Get current path
  const searchParams = useSearchParams(); // Get search query params (from URL)

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();

    // Dynamically handle redirect based on pathname
    let redirectTo = "/search";

    if (pathname.includes("/book_category")) {
      redirectTo = `/book_category?search=${query}`;
    } else if (pathname.includes("/cartoonPage")) {
      redirectTo = `/cartoonPage?search=${query}`;
    }

    // Perform the navigation
    window.location.href = redirectTo; // Programmatically redirect to the new path
  };

  return (
    <div className="w-[95%] p-5 mx-auto mb-5">
      <form onSubmit={handleSearchSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <div className="w-full bg-[#f8f9fa] overflow-hidden rounded-full flex items-center border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <Input
              id="search"
              type="search"
              className="w-full ps-10 text-sm text-gray-900"
              placeholder="Search book or category"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
          </div>
        </div>
        <Button type="submit" className="hidden">
          Search
        </Button>
      </form>
    </div>
  );
}

// import { Input, Button } from "@heroui/react";

// export default function SearchBarComponent() {
//   return (
//     <div className="w-[95%] p-5 mx-auto mb-5">
//       <form>
//         <div className="relative">
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg
//               className="w-4 h-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </div>
//           <div className="w-full bg-[#f8f9fa] overflow-hidden rounded-full flex items-center border border-gray-300 hover:border-blue-500 transition-all duration-300">
//             <Input
//               id="search"
//               type="search"
//               className="w-full ps-10 text-sm  text-gray-900"
//               placeholder="Search book or category"
//               required
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
