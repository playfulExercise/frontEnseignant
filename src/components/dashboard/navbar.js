import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <body class="bg-gray-100">
        <div class="font-sans m-0 antialiased leading-none">
          <nav class="bg-white border-b">
            <div class="container mx-auto">
              <div class="flex items-center justify-between py-4 pl-1">
                <div>
                  <a
                    href="/"
                    class="block flex items-center font-extrabold text-gray-700"
                  >
                    Exercices ludiques
                  </a>
                </div>
                <div class="hidden w-full flex-grow lg:flex justify-end lg:items-center lg:w-auto uppercase font-light">
                  <a
                    href="/"
                    class="text-gray-800 text-sm hover:text-blue-600 mr-5"
                  >
                    <i class="icon ion-ios-analytics mr-2 text-gray-600 inline-block"></i>
                    Dashboard
                  </a>
                  <a
                    href="/"
                    class="text-gray-800 text-sm hover:text-blue-600 mr-5"
                  >
                    <i class="icon ion-ios-information-circle-outline mr-2 text-gray-600 inline-block"></i>
                    Resources
                  </a>
                  <a
                    href="/"
                    class="text-gray-800 text-sm hover:text-blue-600 mr-5"
                  >
                    <i class="icon ion-ios-help-buoy mr-2 text-gray-600 inline-block"></i>
                    Support
                  </a>
                  <a
                    href="/"
                    class="text-gray-800 text-sm font-light hover:text-blue-500"
                  >
                    <i class="icon ion-ios-notifications-outline mr-3 text-gray-600 text-2xl inline-block"></i>
                  </a>
                </div>

                <div class="hidden sm:flex items-center">
                  <div class="relative" id="usermenu">
                    <div class="flex items-center cursor-pointer text-sm border border-white border-b-0 text-gray-700 rounded-t-lg py-1 px-2">
                      <img
                        src="avatar.png"
                        class="rounded-full h-8 mr-2 border border-gray-500 p-px"
                      />
                      eCreeth
                      <svg
                        class="fill-current text-gray-600 h-4 w-4 mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>{" "}
                    <div class="absolute border border-t-0 border-gray-100 invisible rounded-b-lg bg-white p-2 w-48">
                      <a href="/" class="px-4 py-2 block text-gray-800">
                        Account Settings
                      </a>
                      <hr class="border-t mx-2 border-gray-100" />
                      <a href="/" class="px-4 py-2 block text-gray-800">
                        Logout
                      </a>
                    </div>
                  </div>
                </div>

                <div class="sm:hidden cursor-pointer h-6 w-6 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </nav>

          <div class="container mx-auto">
            <div class="flex w-full min-w-full rounded-sm mt-4">
              <div class="w-1/4 md:w-2/6 font-light mb-5">
                <div class="bg-white rounded">
                  <div class="border-b border-gray-200">
                    <div class="text-black font-light uppercase text-sm py-5 px-5">
                      Configuraciones
                    </div>
                  </div>
                  <div>
                    <a class="block py-3 px-5" href="/">
                      <div class="text-gray-700">
                        <i class="icon ion-ios-paper mr-2 text-gray-600 inline-block"></i>{" "}
                        Pages
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      class="block py-3 px-5 border border-gray-200 bg-gray-600 flex justify-between"
                      href="/"
                    >
                      <div class="text-white">
                        <i class="icon ion-ios-person mr-2 text-gray-500 inline-block"></i>{" "}
                        Users
                      </div>
                    </a>
                  </div>
                  <div>
                    <a class="block py-3 px-5" href="/">
                      <div class="text-gray-700">
                        <i class="icon ion-ios-briefcase mr-2 text-gray-600 inline-block"></i>{" "}
                        Products
                      </div>
                    </a>
                  </div>
                  <div>
                    <a class="block py-3 px-5" href="/">
                      <div class="text-gray-700">
                        <i class="icon ion-ios-basketball mr-2 text-gray-600 inline-block"></i>{" "}
                        Articles
                      </div>
                    </a>
                  </div>
                  <div>
                    <a class="block py-3 px-5" href="/">
                      <div class="text-gray-700">
                        <i class="icon ion-ios-bicycle mr-2 text-gray-600 inline-block"></i>{" "}
                        Categories
                      </div>
                    </a>
                  </div>
                  <div>
                    <a class="block py-3 px-5" href="/">
                      <div class="text-gray-700">
                        <i class="icon ion-ios-images mr-2 text-gray-600 inline-block"></i>{" "}
                        Multimedia
                      </div>
                    </a>
                  </div>
                </div>
                <div class="mt-5 bg-white rounded">
                  <div class="border-b border-gray-200">
                    <div class="text-black font-light uppercase text-sm py-5 px-5">
                      Seguridad
                    </div>
                  </div>
                  <div>
                    <a class="block py-3 px-5" href="/">
                      <div class="text-gray-700">
                        <i class="icon ion-ios-apps mr-2 text-gray-600 inline-block"></i>{" "}
                        Roles
                      </div>
                    </a>
                  </div>
                  <div>
                    <a class="block py-3 px-5" href="/">
                      <div class="text-gray-700">
                        <i class="icon ion-ios-lock mr-2 text-gray-600 inline-block"></i>{" "}
                        Permisos
                      </div>
                    </a>
                  </div>
                </div>
                <div class="mt-5 bg-white rounded">
                  <div class="border-b border-gray-200">
                    <div class="text-black font-light uppercase text-sm py-5 px-5">
                      Subscripciones
                    </div>
                  </div>
                  <div>
                    <a class="block py-3 px-5" href="/">
                      <div class="text-gray-700">
                        <i class="icon ion-ios-compass mr-2 text-gray-600 inline-block"></i>{" "}
                        Planes
                      </div>
                    </a>
                  </div>
                  <div>
                    <a class="block py-3 px-5" href="/">
                      <div class="text-gray-700">
                        <i class="icon ion-ios-card mr-2 text-gray-600 inline-block"></i>{" "}
                        Facturas
                      </div>
                    </a>
                  </div>
                  <div>
                    <a class="block py-3 px-5" href="/">
                      <div class="text-gray-700">
                        <i class="icon ion-ios-wallet mr-2 text-gray-600 inline-block"></i>{" "}
                        Informaci&oacute;n
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="p-4 w-full bg-white ml-4 font-light mb-5 rounded">
                <h1>eCreeth</h1>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Navbar;
