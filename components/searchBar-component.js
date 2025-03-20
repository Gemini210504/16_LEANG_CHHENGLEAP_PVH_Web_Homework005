"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { searchBookByTitle } from "@/service/book-service";
import { Input } from "@heroui/react";

export default function SearchBarComponent({ searchParams }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const fetchSearchResults = async (query) => {
    if (query) {
      const results = await searchBookByTitle(query);
      setSearchResults(results); 
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      router.push(`/book_category?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    const query = searchParams?.search || "";
    setSearchQuery(query);
    if (query) {
      fetchSearchResults(query);
    }
  }, [searchParams]);

  const onSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/book_category?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push("/"); 
    }
  };

  return (
    <div className="w-[95%] p-5 mx-auto mb-5">
      <form onSubmit={onSearch}>
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
              required
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
