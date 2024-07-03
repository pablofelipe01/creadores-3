'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ConnectButton } from "@/app/thirdweb";
import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleGlobalClick = () => {
    setShowIframe(true);
  };

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 border-b border-gray-300 dark:border-gray-700 shadow-md z-50 backdrop-blur-md">
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <img 
                src="/images/2.png" 
                alt="Logo de MiApp" 
                className="h-14 w-30 object-cover"
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="focus:outline-none"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-800" />
            )}
          </button>
          <div className="hidden md:block">
            <button 
              onClick={handleGlobalClick}
              className="focus:outline-none bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Recargar billetera
            </button>
          </div>
          <Link href="/pricing" legacyBehavior>
            <a className="hidden md:block focus:outline-none bg-green-600 text-white py-1 px-3 rounded-lg hover:bg-green-500 transition-colors">
              Precios
            </a>
          </Link>
          
          <ConnectButton 
            client={client} 
            chain={chain} 
            theme={"dark"}
            connectButton={{ label: "Conectar" }}
            connectModal={{ 
              size: "compact", 
              showThirdwebBranding: false, 
              titleIcon:
              "https://tokensolutions.mypinata.cloud/ipfs/QmQj16wnaNXC8ribmhFMdkesgbYCjKrZz1GCswKV5U5vsS",
            }}
          />
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 p-4 shadow-md z-40">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Menú</h2>
              <button 
                className="focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <Link href="/" legacyBehavior>
              <a className="block text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-2">Inicio</a>
            </Link>
            <button 
              onClick={handleGlobalClick}
              className="block text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-2"
            >
              Global
            </button>
            <Link href="/pricing" legacyBehavior>
              <a className="block text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-2">
                Precios
              </a>
            </Link>
            <Link href="/creators-balances" legacyBehavior>
              <a className="block text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-2">
                Saldos de Creadores
              </a>
            </Link>
          </div>
        )}
      </nav>
      {showIframe && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 p-5 rounded-lg z-50 overflow-hidden flex items-center justify-center">
          <iframe
            src="https://global.transak.com/"
            className="w-full h-full border-none"
          ></iframe>
          <button
            onClick={() => setShowIframe(false)}
            className="absolute top-2 right-2 bg-gray-800 text-white py-2 px-5 rounded-lg cursor-pointer transition-colors hover:bg-red-500"
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
};
