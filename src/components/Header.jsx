




import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import GetmaxLogo from "../assets/GetMaxLogo.png";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    // Focus on the input when opening the search bar
    if (!isSearchOpen) {
      setTimeout(() => {
        document.getElementById("searchInput").focus();
      }, 100);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const performSearch = () => {
    // Update searchQuery state before performing the search
    const trimmedQuery = searchQuery.trim();
    setSearchQuery(trimmedQuery);
    console.log("Searching for:", trimmedQuery);

    const searchData = [
      {
        name: "Sophos",
        category: "Security Solutions",
        subcategory: "Email security",
      },
      {
        name: "Barracuda",
        category: "Security Solutions",
        subcategory: "Email security",
      },
      {
        name: "Microsoft Defender",
        category: "Security Solutions",
        subcategory: "Endpoint security",
      },
      {
        name: "Sophos",
        category: "Security Solutions",
        subcategory: "Endpoint security",
      },
      {
        name: "Barracuda",
        category: "Security Solutions",
        subcategory: "Endpoint security",
      },
      {
        name: "Kaspersky",
        category: "Security Solutions",
        subcategory: "Endpoint security",
      },
      {
        name: "Azure storage",
        category: "Backup solutions",
        subcategory: "Data backup",
      },
      {
        name: "Acronis",
        category: "Backup solutions",
        subcategory: "Data backup",
      },
      {
        name: "Cloud alley",
        category: "Backup solutions",
        subcategory: "Email backup",
      },
      {
        name: "Cloud alley",
        category: "Backup solutions",
        subcategory: "Email backup",
      },
      { name: "Cloud to cloud Migration", category: "Migration" },
      { name: "server to cloud migration", category: "Migration" },
      { name: "server to server migration", category: "Migration" },
      { name: "Website migration", category: "Migration" },
      { name: "Application migration", category: "Migration" },
      {
        name: "Website development",
        category: "Development & Integration services",
      },
      {
        name: "Custom web app",
        category: "Development & Integration services",
      },
      {
        name: "customer API integrations",
        category: "Development & Integration services",
      },
      {
        name: "Microsoft teams",
        category: "Development & Integration services",
      },
      { name: "Power app", category: "Development & Integration services" },
      { name: "Power pages", category: "Development & Integration services" },
      { name: "dataverse", category: "Development & Integration services" },
      {
        name: "Remote support (24/7)",
        category: "Professional Support and services",
      },
      {
        name: "On-site support",
        category: "Professional Support and services",
      },
      {
        name: "Managed Support services",
        category: "Professional Support and services",
      },
    ];

    // Perform actual search logic
    const filteredData = searchData.filter(
      (item) =>
        item.name.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        (item.category &&
          item.category.toLowerCase().includes(trimmedQuery.toLowerCase())) ||
        (item.subcategory &&
          item.subcategory.toLowerCase().includes(trimmedQuery.toLowerCase()))
    );

    // Update search results state
    setSearchResults(filteredData);
  };

  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-[#1b1c44] px-2 lg:px-4 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/home" className="mr-4">
                <img src={GetmaxLogo} className="h-10" alt="Logo" />
              </Link>
            </div>

            <button
              className="text-white lg:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className={`h-8 w-8 transition duration-300 ease-in-out transform ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d={
                    isMenuOpen
                      ? "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                      : "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  }
                />
              </svg>
            </button>

            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:hidden absolute top-0 left-0 right-0 bg-[#1b1c44] p-4 rounded-lg`}
            >
              <div className="flex flex-col items-center space-y-4">
              
                
                
                {/* Search bar */}
                <div className="hidden lg:right-0 lg:flex items-center space-x-4 ">
                  <input
                    type="text"
                    id="searchInput"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Search..."
                    className="px-4 py-2 w-64 border rounded shadow-sm focus:outline-none focus:border-blue-400 lg:right-0"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <button
                    onClick={performSearch}
                    className="text-black bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                  >
                    Search
                  </button>
                </div>

                {/* Mobile search button */}
                {/* <div className="lg:hidden ">
                  <button
                    className="text-black hover:text-orange-800 focus:outline-none"
                    onClick={toggleSearch}
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.854 18.854l-5.343-5.343A7.968 7.968 0 0018 10c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8c1.613 0 3.086-.48 4.357-1.29l5.343 5.343a.5.5 0 00.707 0l1.414-1.414a.5.5 0 000-.707zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
                    </svg>
                  </button>
                </div> */}

                {/* Mobile search input */}
                {/* {isSearchOpen && (
                  <div className="absolute lg:hidden right-0 top-[80%] text-white rounded-lg mt-1 p-1 w-64 transition-all">
                    <input
                      type="text"
                      id="mobileSearchInput" 
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                      className="px-4 py-2 w-full border rounded shadow-sm focus:outline-none focus:border-blue-400"
                      placeholder="Search..."
                    />
                    <button
                      onClick={performSearch}
                      className="text-black bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none mt-2"
                    >
                      Search
                    </button>
                  </div>
                )} */}

                {/* <Link
                  to="/whygetmax"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                  onClick={closeMenu}
                >
                 Join Webinar
                </Link> */}
              </div>
            </div>

            {/* <div className="hidden lg:flex items-center space-x-4">
             
              <div className="relative">
                <button
                  className="text-white hover:text-orange-800 focus:outline-none"
                  onClick={toggleSearch}
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.854 18.854l-5.343-5.343A7.968 7.968 0 0018 10c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8c1.613 0 3.086-.48 4.357-1.29l5.343 5.343a.5.5 0 00.707 0l1.414-1.414a.5.5 0 000-.707zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
                  </svg>
                </button>
                {isSearchOpen && (
                  <div className="absolute left-0 top-full text-black rounded-lg mt-1 p-1 w-64 transition-all">
                    <input
                      type="text"
                      className="px-4 py-2 w-full border rounded shadow-sm focus:outline-none focus:border-blue-400"
                      placeholder="Search..."
                    />
                  </div>
                )}
              </div>
              <Link
                to="/whygetmax"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-4 py-2 lg:py-2.5 focus:outline-none"
              >
                Join Webinar
              </Link>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
}
