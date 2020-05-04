import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../UI/Button";

function Header() {
  const [isShown, setIsShown] = useState(false);
  const [redirectDashboard, setRedirectDashboard] = useState("/dashboard");
  const [isLogout, logout] = useState(false);

  return (
    <nav className="bg-gray-800">
      {redirectDashboard === "/dashboard" && <Redirect to="/dashboard" />}
      {redirectDashboard === "/eleves" && <Redirect to="/eleves" />}
      {redirectDashboard === "/monde" && <Redirect to="/monde" />}
      {redirectDashboard === "/profile" && <Redirect to="/profile" />}
      {isLogout && (localStorage || {}).removeItem("usertoken")}
      {isLogout && <Redirect to="/c/" />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">Exercices ludiques</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <Button
                  onClick={() => setRedirectDashboard("/dashboard")}
                  className={`${
                    redirectDashboard === "/dashboard"
                      ? "ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                      : "ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  }`}
                >
                  Dashboard
                </Button>
                <Button
                  href="/"
                  onClick={() => setRedirectDashboard("/eleves")}
                  className={`${
                    redirectDashboard === "/eleves"
                      ? "ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                      : "ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  }`}
                >
                  Eleves
                </Button>
                <Button
                  onClick={() => setRedirectDashboard("/monde")}
                  className={`${
                    redirectDashboard === "/monde"
                      ? "ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                      : "ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  }`}
                >
                  Monde
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                aria-label="Notifications"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button
                    className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                    onMouseEnter={() => setIsShown(true)}
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                {isShown && (
                  <div
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg z-50"
                  >
                    <div
                      className="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <Button
                        onClick={() => setRedirectDashboard("/profile")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-40 text-left"
                        role="menuitem"
                      >
                        Profile
                      </Button>
                      <Button
                        onClick={() => setRedirectDashboard("/reglages")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-40 text-left"
                        role="menuitem"
                      >
                        Reglages
                      </Button>
                      <Button
                        onClick={() => logout(true)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-40 text-left"
                        role="menuitem"
                      >
                        Se deconnecter
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Dashboard
          </a>
          <a
            href="/"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Eleves
          </a>
          <a
            href="/"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Monde
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="mt-3 px-2">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Profile
            </a>
            <a
              href="/"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Reglages
            </a>
            <a
              href="/"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Se deconnecter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
